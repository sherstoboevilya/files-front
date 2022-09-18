import React from 'react';
import './UiRadio.scss'

// @ts-ignore
const UiRadio = ({id, label, value, name, change}) => {
    return (
        <div className="ui-radio">
            <input
                className='ui-radio__input'
                name={name}
                type="radio"
                id={id}
                value={value}
                onChange={() => change(value)}
            />
            <label
                className='ui-radio__label'
                htmlFor={id}
            >{label}</label>
        </div>
    );
};

export default UiRadio;
