import React from "react";
import PortfolioImage from "../portfolioImage/portfolioImage.component";
import './portfolioBox.styles.scss';

const PortfolioBox = ({imageList}) => {
    return (
        <div className="portfolioBoxContainer">
            <PortfolioImage />
        </div>
    );
}

export default PortfolioBox;