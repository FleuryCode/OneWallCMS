import './App.css';
import firebaseApp from './firebase/firebase.utils';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage.page';
import SignInPage from './pages/SignInPage/SignInPage.page';
import { connect } from 'react-redux';
import { setData } from './redux/textChanges/textChanges.actions';
import { setAllPortfolios, setUrlList, setImagesLoading } from './redux/portfolioUpdates/portfolioUpdates.actions';
import { getDocs, collection, query, onSnapshot } from "firebase/firestore";
import { db, storage } from './firebase/firebase.utils';
import { getDownloadURL, ref } from 'firebase/storage';
import { async } from '@firebase/util';

const App = ({ currentUser, isLoggedIn, setData, setAllPortfolios, setUrlList, setImagesLoading }) => {

  const grabTextChangeSnap = async () => {
    const textChangesSnapshot = await getDocs(collection(db, 'TextChanges'));
    setData(textChangesSnapshot);
  };

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
          if (portfoliosSnapshot[i].id === 'Real Estate Portfolio') {
            realEstatePortfolioArray = portfoliosSnapshot[i].data().images;
          }
        }

        for (let j = 0; j < realEstatePortfolioArray.length; j++) {
          await getDownloadURL(ref(storage, `Real Estate Portfolio/${realEstatePortfolioArray[j].imageName}`))
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





      // setUrlList(portfolioUrlList);
    });
  };

  //   const grabUrlList = async () => {
  //     let portfolioUrlList = [];
  //     for (let j = 0; j < realEstatePortfolio.images.length; j++) {
  //         await getDownloadURL(ref(storage, `RealEstatePortfolio/${realEstatePortfolio.images[j].imageName}`))
  //             .then((url) => {
  //                 portfolioUrlList.push(url);
  //             })
  //             .catch((error) => {
  //                 console.log(error)
  //             });
  //     };
  //     setUrlList(portfolioUrlList);
  //     setImagesLoading(false);
  // };


  useEffect(() => {
    grabTextChangeSnap();
    grabPortfolioSnap();
  });


  return (
    <div className="App">
      {isLoggedIn ? <MainPage /> : <SignInPage />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  isLoggedIn: state.users.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  setData: data => dispatch(setData(data)),
  setAllPortfolios: portfolios => dispatch(setAllPortfolios(portfolios)),
  setUrlList: list => dispatch(setUrlList(list)),
  setImagesLoading: isLoading => dispatch(setImagesLoading(isLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
