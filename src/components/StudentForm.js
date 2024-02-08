import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import Row from 'react-bootstrap/Row';
//import { TextField } from '@mui/material';
import MyTextInput from './inputs/TextInput';
import MySelect from './inputs/SelectInput';



//actual component
export default function StudentForm(props) {

    return (
        <div className="m-3 margin-space input-width col">

            <MyTextInput
                label="First Name"
                name={"firstName" + props.num}
                type="text"
                placeholder="Jane"
                className="mb-2"
            />

            <MyTextInput
                label="Last Name"
                name={"lastName" + props.num}
                type="text"
                placeholder="Doe"
                className="mb-2"
            />


            <MySelect label="Grade" name={"grade" + props.num} className="m1-3 mb-3 form-select">
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


            <MySelect label="Registration Options" name={"regOption" + props.num} className="m1-3">
                <option value="">Select a registration option</option>
                <option value="2023-2024 School Year">2023-2024 School Year</option>
                <option value="2024-2025 Kindergarten">2024-2025 Kindergarten</option>
                <option value="2024-2025 ...1st-12th Grade">2024-2025 ...1st-12th Grade</option>
            </MySelect>

        </div>


    );
}


