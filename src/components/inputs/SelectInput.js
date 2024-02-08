import React from 'react';

function MySelect({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div className='margin-space'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <br />
            <select {...field} {...props} className="select-box" />
            {meta.touched && meta.error ? (
                <div className="val-error">{meta.error}</div>
            ) : null}
        </div>
    );
}

export default MySelect;