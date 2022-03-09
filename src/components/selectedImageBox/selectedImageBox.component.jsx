import React from "react";
import './selectedImageBox.styles.scss';

const SelectedImageBox = ({ selectedImage }) => {
    return (
        <div className="selectedImageBoxContainer">
            <div className="imgContainer ms-4">
                <img src={selectedImage} alt="" />
            </div>
            <div className="imgInfoContainer mx-auto">
                <h5>Hello!</h5>
                <p>DeleteButton</p>
            </div>

        </div>
    );
}

export default SelectedImageBox;