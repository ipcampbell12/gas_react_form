import React from 'react';
import MyTextInput from './inputs/TextInput';
import MySelect from './inputs/SelectInput';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';


function ParentForm(props) {

    return (
        <div>

            <Formik
                initialValues={{
                    personRegistering: '',
                    relationship: '',
                    phone: '',
                    altphone: '',
                    email: '',
                    addr: '',
                    unit: '',
                    city: '',
                    zip: '',
                    numStudents: ''

                }}
                validationSchema={Yup.object({
                    numStudents: Yup.string().required('Required')
                })}
                onSubmit={(values, actions) => {
                    props.setNumStudents(values.numStudents)
                    props.setVisibility(false)
                    props.setOveralInfo(
                        [values.personRegistering, values.relationship, values.phone, values.altphone, values.email, values.addr, values.unit, values.city, values.zip])

                }}
            >
                {props.visbility ?
                    <Form id="num-students-form">
                        <h5 className="margin-space mt-5">Please enter your information</h5>
                        <br />
                        <br />
                        <div id="registrar" className="row">
                            <MyTextInput
                                label="Name of Person Registering"
                                name="personRegistering"
                                type="text"
                                placeholder="My Name"
                                className="col"
                            />
                            <MySelect label="Relationships to student: " name="relationship" className="form-select col">
                                <option value="">Select Relationship</option>
                                <option value="Parent">Parent</option>
                                <option value="Family Member">Family Member</option>
                                <option value="Friend of Family">Friend of Family</option>
                                <option value="Other">Other</option>
                            </MySelect>
                        </div>
                        <br />
                        <br />
                        <div id="contact-info" className="row">
                            <MyTextInput
                                label="Phone Number"
                                name="phone"
                                type="phone"
                                placeholder="111-222-3333"
                                className="col"
                            />
                            <MyTextInput
                                label="Alternative Phone"
                                name="altphone"
                                type="phone"
                                placeholder="222-333-4444"
                                className="col"
                            />
                            <MyTextInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="myname@gmail.com"
                                className="col"
                            />
                        </div>
                        <br />
                        <br />
                        <div id="address" className="row">
                            <MyTextInput
                                label="Street Address"
                                name="addr"
                                type="text"
                                placeholder="1234 Home St"
                                className="col"
                            />
                            <MyTextInput
                                label="Apartment/Unit #"
                                name="unit"
                                type="text"
                                placeholder="F203"
                                className="col"
                            />
                            <MyTextInput
                                label="City"
                                name="city"
                                type="text"
                                placeholder="Woodburn"
                                className="col"
                            />
                            <MyTextInput
                                label="Zip"
                                name="zip"
                                type="text"
                                placeholder="97071"
                                className="col"
                            />
                        </div>
                        <br />
                        <br />
                        <div id="num-of-students" className="row">
                            <MySelect label="Number of Students you want to register: " name="numStudents" className="form-select">
                                <option value="">Select Number of Students</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </MySelect>
                        </div>
                        <br />

                        <br />
                        <button type="submit" className="btn btn-primary margin-space" >
                            Submit
                        </button>
                    </Form> : ''
                }
            </Formik>



        </div>
    );
}

export default ParentForm;