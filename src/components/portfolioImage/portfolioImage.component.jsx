import React from "react";
import './portfolioImage.styles.scss';
import TestImage from '../../assets/testImageOne.jpg';

const PortfolioImage = ({imageUrl}) => {
    return (
        <div className="portfolioImageContainer">
            <img src={imageUrl} alt="" />
        </div>
    );
}

export default PortfolioImage;