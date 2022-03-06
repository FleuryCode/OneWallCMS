import React from "react";
import './portfolios.styles.scss';
import { ref, getStorage, getDownloadURL } from "firebase/storage";


const PortfoliosSection = () => {

    const storage = getStorage();

    let testing = 'Test';
    getDownloadURL(ref(storage, 'RealEstatePortfolio/testImageOne.jpg'))
    .then((url) => {
        const img = document.getElementById('testImage');
        img.setAttribute('src', url);
        testing = url;
    })
    .catch((error) => {
        console.log(error);
    });

    console.log(testing);


    
    
    return(
        <div className="portfoliosSectionContainer">
            <h1>Portfolios</h1>
            <img id="testImage" alt="" />
        </div>
    );
}

export default PortfoliosSection;