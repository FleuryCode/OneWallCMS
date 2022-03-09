import React from "react";
import './portfolios.styles.scss';
import PortfolioBox from "../portfolioBox/portfolioBox.component";
import AddImageButton from "../addImageButton/addImageButton.component";
import CustomDropDown from "../customDropdown/CustomDropDown.component";
import { connect } from "react-redux";


const PortfoliosSection = ({ portfolios, selectedPortfolio }) => {

    // Real Estate Portfolio (Eventually make this dynamic based on selection of portfolio)
    let displayedPortfolio = {} //Change this eventually to be selectedPortfolio
    if (portfolios.length > 0) {
        for (let i = 0; i < portfolios.length; i++) {
            if (portfolios[i].id === selectedPortfolio) {
                displayedPortfolio = portfolios[i].data();
            }
        };
    }

    const portfolioList = [
        {
            id: 1,
            page: 'Real Estate Portfolio'
        },
        {
            id: 2,
            page: 'Twilight Portfolio'
        },
    ]

    return (
        <div className="portfoliosSectionContainer container-fluid">
            <div className="row d-flex justify-content-center mb-4">
                <h1 className="text-center">Portfolios</h1>
            </div>
            <div className="row">
                <CustomDropDown section={'Portfolio'} pageList={portfolioList} />
            </div>
            <div className="row">
                <div className="col-10">
                    <PortfolioBox />
                </div>
                <div className="col-2">
                    <AddImageButton imageArrayObject={displayedPortfolio} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    portfolios: state.portfolio.allPortfolios,
    selectedPortfolio: state.portfolio.selectedPortfolio
});

export default connect(mapStateToProps)(PortfoliosSection);