import React from 'react';
import "./Buttons.css";

const PrimaryButton = ({ type, buttonText }) => {
    return (
        <button className="btn-primary" type={type}>{buttonText}</button>
    )
}

export { PrimaryButton };