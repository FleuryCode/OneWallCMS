import React from "react";
import './CustomTextArea.styles.scss';

const CustomTextArea = ({handleChange, ...otherProps}) => {
    return(
        <div className="textAreaContainer">
            <textarea required className="textarea-input" onChange={handleChange} {...otherProps}></textarea>
        </div>
    );
}

export default CustomTextArea;