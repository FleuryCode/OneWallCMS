import React from "react";
import PortfolioImage from "../portfolioImage/portfolioImage.component";
import './portfolioBox.styles.scss';

const PortfolioBox = ({ imageList, isLoading }) => {

    return (
        <div className="portfolioBoxContainer">
            {
                isLoading ?
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    :
                    <div className="portfolioInside">
                        {
                            imageList.map(image => (
                                <PortfolioImage key={image} imageUrl={image} />
                            ))
                        }
                    </div>
            }


        </div>
    );
}

export default PortfolioBox;