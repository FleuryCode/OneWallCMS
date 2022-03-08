import React, { useEffect, useState } from "react";
import './portfolios.styles.scss';
import { ref, getDownloadURL } from "firebase/storage";
import PortfolioBox from "../portfolioBox/portfolioBox.component";
import AddImageButton from "../addImageButton/addImageButton.component";
import { storage } from "../../firebase/firebase.utils";
import { connect } from "react-redux";


const PortfoliosSection = ({ portfolios, urlList }) => {
    
    const selectedPortfolio = 'Real Estate Images'; //Change to dynamic
    // Real Estate Portfolio (Eventually make this dynamic based on selection of portfolio)
    let realEstatePortfolio = {} //Change this eventually to be selectedPortfolio
    if (portfolios.length > 0) {
        for (let i = 0; i < portfolios.length; i++) {
            if (portfolios[i].id === selectedPortfolio) {
                realEstatePortfolio = portfolios[i].data();
            }
        };
    }

    


    // useEffect(() => {
        
    // });

    return (
        <div className="portfoliosSectionContainer">
            <h1>Portfolios</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <PortfolioBox imageList={urlList} />
                    </div>
                    <div className="col-2">
                        <AddImageButton imageArrayObject={realEstatePortfolio} />
                    </div>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    portfolios: state.portfolio.allPortfolios,
    urlList: state.portfolio.urlList
});

export default connect(mapStateToProps)(PortfoliosSection);