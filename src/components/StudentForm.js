import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import Row from 'react-bootstrap/Row';
//import { TextField } from '@mui/material';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './inputs/TextInput';
import MySelect from './inputs/SelectInput';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();


//actual component
export default function StudentForm(props) {


    // Yup.addMethod(Yup.string, 'validPet', function () {
    //     return this.test('valid-pet', 'Your favorite pet must be a Hamster, a Bunny or a Dolphin', function (value) {
    //         return !value || allowablePets.includes(value);
    //     });
    // });
    return (
        <div>
            <Formik
                initialValues={{ firstName: '', lastName: '', grade: '', regOption: '' }}
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
                    grade: Yup.string().required('Required'),
                    regOption: Yup.string().required('Required')
                })}
                onSubmit={(values, actions) => {
                    serverFunctions
                        .addDataToSheet(values.firstName, values.lastName, values.grade, values.regOption)
                        .then(actions.resetForm())
                        .catch((err) => console.log(err))
                }}>
                <Form className='margin-space input-width'>

                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                        className="mb-2"
                    />

                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        className="mb-2"
                    />


                    <MySelect label="Grade" name="grade" className="m1-3 mb-3 form-select">
                        <option value="">Select student's current grade</option>
                        <option value="Kindergarten">Kindergarten</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                        <option value="5">5th</option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                        <option value="9">9th</option>
                        <option value="10">10th</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                    </MySelect>


                    <MySelect label="Registration Options" name="regOption" className="m1-3">
                        <option value="">Select a registration option</option>
                        <option value="2023-2024 School Year">2023-2024 School Year</option>
                        <option value="2024-2025 Kindergarten">2024-2025 Kindergarten</option>
                        <option value="2024-2025 ...1st-12th Grade">2024-2025 ...1st-12th Grade</option>
                    </MySelect>

                </Form>
            </Formik>
        </div>


    );
}


