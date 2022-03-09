import React, { useState } from "react";
import './addImageButton.styles.scss';
import PlusIcon from '../../assets/plusSignIcon.svg';
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase/firebase.utils";
import { doc, updateDoc } from "firebase/firestore";
import { connect } from 'react-redux';

const AddImageButton = ({ selectedPortfolio, imageArrayObject }) => {
    const [fileUploading, setFileUploading] = useState(false);


    const hiddenFileInput = React.useRef(null);
    const addButtonClick = () => {
        hiddenFileInput.current.click();
    }

    const multiUploadChange = async (event) => {
        if (event.target.files && event.target.files[0]) {
            const fileArray = event.target.files;
            setFileUploading(true)

            for (let i = 0; i < fileArray.length; i++) {
                const metadata = {
                    contentType: fileArray[i].type
                };
                const storageRef = ref(storage, `${selectedPortfolio}/${fileArray[i].name}`);
                // Upload to Storage
                await uploadBytes(storageRef, fileArray[i], metadata)
                    .then((snapshot) => {
                        imageArrayObject.images.push(
                            {
                                id: imageArrayObject.images.length + 1,
                                imageName: fileArray[i].name
                            }
                        )
                        console.log('Complete');
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
            // Waits until After Loop is done
            console.log('After Loop', imageArrayObject);
            const realEstatePortfolioRef = doc(db, 'PortfolioImages', selectedPortfolio);
            await updateDoc(realEstatePortfolioRef, imageArrayObject);
            console.log('Upload Array to DB Complete')
            setFileUploading(false);
        }
    };


    return (
        <div className="addImageButtonContainer">
            <div onClick={addButtonClick} className="addButton">
                {
                    fileUploading ?
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        : <img src={PlusIcon} alt="Plus Sign Icon" />
                }

            </div>
            <input
                onChange={multiUploadChange}
                id="addImages"
                type="file"
                accept="image/*"
                multiple="multiple"
                style={{ display: 'none' }}
                ref={hiddenFileInput} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    selectedPortfolio: state.portfolio.selectedPortfolio
});

export default connect(mapStateToProps)(AddImageButton);