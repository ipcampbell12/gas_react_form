import React from 'react';
import { useField } from 'formik';

function MyTextInput({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div className='margin-space mb-2'>

            <label htmlFor={props.id || props.name} className="form-label">{label}</label>
            <input className="text-input form-control input-width" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="val-error">{meta.error}</div>
            ) : null}

        </div>
    );
}

export default MyTextInput;