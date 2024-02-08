import { useState } from "react";
import React from 'react';
import { PracticeForm } from "./Form"
import { MySelect } from './Form';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';


function NumberForm(props) {

    const [numStudents, setNumStudents] = useState('');
    const [visbility, setVisibility] = useState(true);

    return (
        <div>

            <Formik
                initialValues={{ numStudents: '' }}
                validationSchema={Yup.object({
                    numStudents: Yup.string().required('Required')
                })}
                onSubmit={(values, actions) => {
                    setNumStudents(values.numStudents)
                    setVisibility(false)
                    console.log(numStudents)

                }}
            >
                {visbility ?
                    <Form id="num-students-form">
                        <h5 className="margin-space">How Many students do you want to register?</h5>
                        <br />
                        <br />
                        <MySelect label="Number of Students" name="numStudents" className="margin-space m1-3">
                            <option value="">Select Number of Students</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </MySelect>
                        <br />
                        <br />
                        <button type="submit" className="btn btn-primary margin-space" >
                            Submit
                        </button>
                    </Form> : ''
                }
            </Formik>
            <div>
                {Array(+numStudents).fill(true).map((_, i) => <PracticeForm key={i} />)}
            </div>


        </div>
    );
}

export default NumberForm;