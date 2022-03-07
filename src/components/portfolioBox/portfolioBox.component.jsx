import React from "react";
import PortfolioImage from "../portfolioImage/portfolioImage.component";
import './portfolioBox.styles.scss';
import TestImageOne from '../../assets/testImageOne.jpg';
import TestImageTwo from '../../assets/testImageTwo.jpg';
import TestImageThree from '../../assets/testImageThree.jpg';

const PortfolioBox = ({ imageList }) => {
    const testImageList = [
        TestImageOne,
        TestImageTwo,
        TestImageThree,
        TestImageThree,
        TestImageThree,
        TestImageThree,
        TestImageThree,
        TestImageThree,
        TestImageThree
    ];
    return (
        <div className="portfolioBoxContainer">
            <div className="portfolioInside">
                {
                    testImageList.map(image => (
                        <PortfolioImage imageUrl={image} />
                    ))
                }
            </div>

        </div>
    );
}

export default PortfolioBox;