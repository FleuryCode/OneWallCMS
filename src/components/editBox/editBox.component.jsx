import React, { useState } from "react";
import CustomButton from "../customButton/CustomButton.component";
import CustomTextArea from "../customTextArea/CustomTextArea.component";
import './editBox.styles.scss';
import { firestore } from "../../firebase/firebase.utils";

const EditBox = ({ header, body, pickedPage }) => {
    const [bodyText, setBodyText] = useState(body);
    const [isClicked, setIsClicked] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const updateRef = firestore.collection('TextChanges').doc(pickedPage);
    

    const handleChange = (event) => {
        const { value } = event.target;
        setBodyText(value);
    }

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const updateClick = async () => {
        setIsUpdating(true)
        try {
            await updateRef.update({
                [header]: bodyText
            });
            setIsUpdating(false);
        } catch (error) {
            console.log(error);
            setIsUpdating(false);
        }
    }

    return (
        <div className="editBoxContainer container-fluid">
            <div className="row">
                <div className="col-12">
                    <h4 onClick={handleClick} className="text-center">{header}</h4>
                </div>
            </div>
            <div className={`${isClicked ? 'isClicked' : 'notClicked'} row`}>
                <div className={`col-12 editableInfo`}>
                    <CustomTextArea onChange={handleChange} name={'bodyText'} id={'bodyText'} value={bodyText} />
                </div>
                <div className="col-11 col-sm-4 col-md-2">
                    <CustomButton onClick={updateClick} page={'contact'} text='Update' />
                </div>
                <div className={`${isUpdating ? 'd-flex' : 'd-none'} col-1 align-items-center`}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditBox;