import React from 'react';
import ParentForm from './ParentForm';
import { useState } from "react";
import { Formik, Form, useField } from 'formik';
import StudentForm from "./StudentForm"
import OverallInfo from './OverallInfo';
import * as Yup from 'yup';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();


function OverallForm(props) {

    const [numStudents, setNumStudents] = useState('');
    const [overallInfo, setOveralInfo] = useState([])
    const [visbility, setVisibility] = useState(true);
    const [studentInfo, setStudentInfo] = useState([])

    console.log("OverallInfo:", overallInfo)
    console.log("numStudents:", numStudents)

    return (
        <div>
            <OverallInfo
                numStudents={numStudents}
                setNumStudents={setNumStudents}
                overallInfo={overallInfo}
                setOveralInfo={setOveralInfo}
                visbility={visbility}
                setVisibility={setVisibility}
            />
            <ParentForm
                numStudents={numStudents}
                setNumStudents={setNumStudents}
                overallInfo={overallInfo}
                setOveralInfo={setOveralInfo}
                visbility={visbility}
                setVisibility={setVisibility}
            />
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
                    // serverFunctions
                    //     .addDataToSheet(values.firstName, values.lastName, values.grade, values.regOption)
                    //     .then(actions.resetForm())
                    //     .catch((err) => console.log(err))
                    // values.map((val) => setStudentInfo([...studentInfo, val]))
                    // setTimeout(() => {
                    //     console.log(studentInfo)
                    // }, 500)
                    console.log(values)
                }}>
                <Form>
                    <div className='row'>
                        {Array(+numStudents).fill(true).map((_, i) => <StudentForm key={i} num={i} />)}

                    </div>
                    <div className='row'>
                        {!visbility &&
                            <button type="submit" className="btn btn-primary mx-auto">
                                Submit
                            </button>
                        }
                    </div>
                </Form>
            </Formik>


        </div>
    );
}

export default OverallForm;