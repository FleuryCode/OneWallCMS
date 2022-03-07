import React from "react";
import './portfolios.styles.scss';
import { ref, getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase.utils";
import { async } from "@firebase/util";
import PortfolioBox from "../portfolioBox/portfolioBox.component";


const PortfoliosSection = () => {

    const storage = getStorage();
    const db = getFirestore();
    const realEstatePortfolioRef = doc(db, 'PortfolioImages', 'Real Estate Images');

    const testClick = async () => {
        const testValue = {
            images: [
                {
                    id: 2,
                    imageName: 'HelloWorld'
                },
                {
                    id: 4,
                    imageName: 'LetsTryThis'
                }
            ]
        };


        await setDoc(realEstatePortfolioRef, testValue);

    }

    const getDataTest = async () => {
        const docRef = doc(db, "PortfolioImages", "Real Estate Images");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            const imageArray = data.images;

            console.log(imageArray);
        }
    }





    // Downloading a File
    getDownloadURL(ref(storage, 'RealEstatePortfolio/testImageOne.jpg'))
        .then((url) => {
            const img = document.getElementById('testImage');
            img.setAttribute('src', url);
        })
        .catch((error) => {
            console.log(error);
        });


    // Uploading a Single File

    let imageToUpload = {};

    const imageInputChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const image = event.target.files[0];
            imageToUpload = image;
        }
    };

    const onClickInputTest = () => {


        const storageRef = ref(storage, `RealEstatePortfolio/${imageToUpload.name}`);
        const metaData = {
            contentType: imageToUpload.type
        };
        uploadBytes(storageRef, imageToUpload, metaData).then((snapshot) => {
            console.log(snapshot);
            console.log('Image Uploaded');
        })
            .catch((error) => {
                console.log(error);
            });
    };


    // This Works
    // Testing Multiple File Upload
    let multiFileArray = {}
    const multiUploadChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const fileArray = event.target.files;
            multiFileArray = fileArray;
        }
    };

    const multiClick = () => {
        for (let i = 0; i < multiFileArray.length; i++) {
            const metaData = {
                contentType: multiFileArray[i].type
            };
            const storageRef = ref(storage, `RealEstatePortfolio/${multiFileArray[i].name}`);
            // Upload to DB


            // Upload to Storage
            uploadBytes(storageRef, multiFileArray[i], metaData).then((snapshot) => {
                console.log('Complete')
            })
                .catch((error) => {
                    console.log(error);
                });
        }

        document.getElementById('multiUpload').value = "";
    };






    return (
        <div className="portfoliosSectionContainer">
            <h1>Portfolios</h1>
            <img id="testImage" alt="" />
            <br />
            <br />
            <input type="file" name="imageUpload" id="imageUpload" accept="image/*" onChange={imageInputChange} />
            <button onClick={onClickInputTest}>Test Input</button>
            <br />
            <br />
            <input type="file" multiple="multiple" id="multiUpload" accept="image/*" on onChange={multiUploadChange} />
            <button onClick={multiClick}>Multi Test</button>
            <br />
            <br />
            <button onClick={testClick}>Test Button</button>
            <button onClick={getDataTest}>Test Two Button</button>
            <br />
            <br />

            {/* Start of Real Component. Remove Top Once Done with Testing */}

            <PortfolioBox />
        </div>
    );
}

export default PortfoliosSection;