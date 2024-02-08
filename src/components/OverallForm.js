import React from 'react';
import ParentForm from './ParentForm';
import { useState } from "react";
import StudentForm from "./StudentForm"
import OverallInfo from './OverallInfo';

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
            <div className='row'>
                {Array(+numStudents).fill(true).map((_, i) => <StudentForm key={i} className="col" />)}
            </div>
            {!visbility &&
                <button type="submit" className="btn btn-primary margin-space" >
                    Submit
                </button>
            }
        </div>
    );
}

export default OverallForm;