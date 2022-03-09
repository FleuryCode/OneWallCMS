import React from "react";
import PortfolioImage from "../portfolioImage/portfolioImage.component";
import { connect } from "react-redux";
import './portfolioBox.styles.scss';

const PortfolioBox = ({ urlList }) => {

    return (
        <div className="portfolioBoxContainer">
            <div className="portfolioInside">
                {
                    urlList.map(image => (
                        <PortfolioImage key={image} imageUrl={image} />
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    urlList: state.portfolio.urlList
});

export default connect(mapStateToProps)(PortfolioBox);