import React, { useEffect, useState } from "react";
import './portfolios.styles.scss';
import { ref, getDownloadURL } from "firebase/storage";
import PortfolioBox from "../portfolioBox/portfolioBox.component";
import AddImageButton from "../addImageButton/addImageButton.component";
import { storage } from "../../firebase/firebase.utils";
import { connect } from "react-redux";


const PortfoliosSection = ({ portfolios }) => {

    const selectedPortfolio = 'Real Estate Images'; //Change to dynamic
    const [urlList, setUrlList] = useState([]);
    const [imagesLoading, setImagesLoading] = useState(true);

    // Real Estate Portfolio (Eventually make this dynamic based on selection of portfolio)
    let realEstatePortfolio = {} //Change this eventually to be selectedPortfolio
    if (portfolios.length > 0) {
        for (let i = 0; i < portfolios.length; i++) {
            if (portfolios[i].id === selectedPortfolio) {
                realEstatePortfolio = portfolios[i].data();
            }
        };
    }

    const grabUrlList = async () => {
        let portfolioUrlList = [];
        for (let j = 0; j < realEstatePortfolio.images.length; j++) {
            await getDownloadURL(ref(storage, `RealEstatePortfolio/${realEstatePortfolio.images[j].imageName}`))
                .then((url) => {
                    portfolioUrlList.push(url);
                })
                .catch((error) => {
                    console.log(error)
                });
        };
        setUrlList(portfolioUrlList);
        setImagesLoading(false);
    };


    useEffect(() => {
        grabUrlList();
    });

    return (
        <div className="portfoliosSectionContainer">
            <h1>Portfolios</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <PortfolioBox imageList={urlList} isLoading={imagesLoading} />
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
    portfolios: state.portfolio.allPortfolios
});

export default connect(mapStateToProps)(PortfoliosSection);