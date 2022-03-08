import './App.css';
import firebaseApp from './firebase/firebase.utils';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage.page';
import SignInPage from './pages/SignInPage/SignInPage.page';
import { connect } from 'react-redux';
import { setData } from './redux/textChanges/textChanges.actions';
import { setAllPortfolios } from './redux/portfolioUpdates/portfolioUpdates.actions';
import { getDocs, collection, query, onSnapshot } from "firebase/firestore";
import { db } from './firebase/firebase.utils';

const App = ({ currentUser, isLoggedIn, setData, setAllPortfolios }) => {

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
    });    
  };


  useEffect(() => {
    grabTextChangeSnap();
    grabPortfolioSnap();
  });



  // // Grabbing Collection PortfolioImages from DB
  // const portfoliosRef = firestore.collection('PortfolioImages');
  // portfoliosRef.onSnapshot(async snapshot => {
  //   const portfolioArray = snapshot.docs;
  //   setAllPortfolios(portfolioArray);
  // });


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
  setAllPortfolios: portfolios => dispatch(setAllPortfolios(portfolios))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
