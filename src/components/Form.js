import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import { TextField } from '@mui/material';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();


export const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <div className='margin-space'>

            <label htmlFor={props.id || props.name} className="form-label">{label}</label>
            <input className="text-input form-control input-width" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="val-error">{meta.error}</div>
            ) : null}

        </div>
    );
};

export const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='margin-space'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} className="form-select form-select-lg mb-3" />
            {meta.touched && meta.error ? (
                <div className="val-error">{meta.error}</div>
            ) : null}
        </div>
    );
};


//actual component
export function PracticeForm(props) {
    const allowablePets = ['Hamster', "Bunny", "Dolphin"]

    Yup.addMethod(Yup.string, 'validPet', function () {
        return this.test('valid-pet', 'Your favorite pet must be a Hamster, a Bunny or a Dolphin', function (value) {
            return !value || allowablePets.includes(value);
        });
    });
    return (
        <div>
            <Formik
                initialValues={{ firstName: '', lastName: '', favoritePet: '', regOption: '' }}
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
                    regOption: Yup.string().required('Required')
                })}
                onSubmit={(values, actions) => {
                    serverFunctions
                        .addDataToSheet(values.firstName, values.lastName, values.favoritePet, values.regOption)
                        .then(actions.resetForm())
                        .catch((err) => console.log(err))
                }}>
                <Form className='margin-space input-width'>

                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                    />

                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                    />

                    <MyTextInput
                        label="Favorite Pet"
                        name="favoritePet"
                        type="text"
                        placeholder="Shark"
                    />



                    <MySelect label="Registration Options" name="regOption" className="m1-3">
                        <option value="">Select a registration option</option>
                        <option value="2023-2024 School Year">2023-2024 School Year</option>
                        <option value="2024-2025 Kindergarten">2024-2025 Kindergarten</option>
                        <option value="2024-2025 ...1st-12th Grade">2024-2025 ...1st-12th Grade</option>
                    </MySelect>


                    <button type="submit" className="btn btn-primary margin-space" >
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>


    );
}


