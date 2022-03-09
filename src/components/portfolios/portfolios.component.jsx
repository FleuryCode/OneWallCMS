import React, { useEffect } from "react";
import './portfolios.styles.scss';
import PortfolioBox from "../portfolioBox/portfolioBox.component";
import AddImageButton from "../addImageButton/addImageButton.component";
import CustomDropDown from "../customDropdown/CustomDropDown.component";
import { connect } from "react-redux";
import { getDownloadURL, ref } from 'firebase/storage';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db, storage } from '../../firebase/firebase.utils';
import { setUrlList, setImagesLoading, setAllPortfolios  } from "../../redux/portfolioUpdates/portfolioUpdates.actions";


const PortfoliosSection = ({ portfolios, selectedPortfolio, setUrlList, setImagesLoading }) => {

    const grabPortfolioSnap = async () => {
        const q = query(collection(db, 'PortfolioImages'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const portfoliosSnapshot = [];
          querySnapshot.forEach((doc) => {
            portfoliosSnapshot.push(doc);
          });
          setAllPortfolios(portfoliosSnapshot);
    
          // Setting Initial URL List. Always Real Estate Photos
          const getRealEstatePortfolioArray = async () => {
            let realEstatePortfolioArray = [];
            let portfolioUrlList = [];
            setImagesLoading(true);
            for (let i = 0; i < portfoliosSnapshot.length; i++) {
              if (portfoliosSnapshot[i].id === selectedPortfolio) {
                realEstatePortfolioArray = portfoliosSnapshot[i].data().images;
              }
            }
    
            for (let j = 0; j < realEstatePortfolioArray.length; j++) {
              await getDownloadURL(ref(storage, `${selectedPortfolio}/${realEstatePortfolioArray[j].imageName}`))
                .then((url) => {
                  portfolioUrlList.push(url);
    
                })
                .catch((error) => {
                  console.log(error);
                });
            }
    
            setImagesLoading(false);
            setUrlList(portfolioUrlList);
          }
          getRealEstatePortfolioArray();
        });
      };

      useEffect(() => {
          grabPortfolioSnap();
      });

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

const mapDispatchToProps = (dispatch) => ({
    setAllPortfolios: portfolios => dispatch(setAllPortfolios(portfolios)),
    setUrlList: list => dispatch(setUrlList(list)),
    setImagesLoading: isLoading => dispatch(setImagesLoading(isLoading))
  });

export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosSection);