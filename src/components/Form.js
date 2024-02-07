import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap'
import * as Yup from 'yup';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

function Form(props) {
    const allowablePets = ['Hamster', "Bunny", "Dolphin"]

    Yup.addMethod(Yup.string, 'validPet', function () {
        return this.test('valid-pet', 'Invalid pet selection', function (value) {
            return !value || allowablePets.includes(value);
        });
    });
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', favoritePet: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                        'Name can only contain letters.')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                        'Name can only contain letters.')
                    .required('Required'),
                favoritePet: Yup.string().validPet().required('Required'),
            })}
            onSubmit={(values, actions) => {
                serverFunctions
                    .addDataToSheet(values.firstName, values.lastName, values.favoritePet)
                    .then(actions.resetForm())
                    .catch((err) => console.log(err))
            }}>
            <Form>
                <Form.Group>
                    <label htmlFor="firstName">First Name </label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" />
                </Form.Group>

                <Form.Group>
                    <label htmlFor="lastName">Last Name </label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" />
                </Form.Group>

                <Form.Group>
                    <label htmlFor="favoritePet">Favorite Pet </label>
                    <Field name="favoritePet" type="text" />
                    <ErrorMessage name="favoritePet" />
                </Form.Group>

                <Form.Group>
                    <Field name="colors" as="select" className="my-select">
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </Field>
                </Form.Group>

                <button type="submit">Submit</button>

            </Form>

        </Formik>
    );
}

export default Form;