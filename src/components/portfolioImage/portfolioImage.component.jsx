import React from "react";
import './portfolioImage.styles.scss';
import { connect } from "react-redux";

const PortfolioImage = ({ imageUrl, isLoading }) => {
    return (
        <div className="portfolioImageContainer">
            {
                isLoading ?
                    <div className="spinnerContainer">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : <img src={imageUrl} alt="" />
            }

        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.portfolio.imagesLoading
});

export default connect(mapStateToProps)(PortfolioImage);