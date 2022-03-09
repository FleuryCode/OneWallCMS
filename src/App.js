import './App.css';
import firebaseApp from './firebase/firebase.utils';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage.page';
import SignInPage from './pages/SignInPage/SignInPage.page';
import { connect } from 'react-redux';
import { setData } from './redux/textChanges/textChanges.actions';
import { getDocs, collection } from "firebase/firestore";
import { db } from './firebase/firebase.utils';

const App = ({ currentUser, isLoggedIn, setData, setAllPortfolios, setUrlList, setImagesLoading, selectedPortfolio }) => {

  const grabTextChangeSnap = async () => {
    const textChangesSnapshot = await getDocs(collection(db, 'TextChanges'));
    setData(textChangesSnapshot);
  };

  

  useEffect(() => {
    grabTextChangeSnap();
  });


  return (
    <div className="App">
      {isLoggedIn ? <MainPage /> : <SignInPage />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
  isLoggedIn: state.users.isLoggedIn,
  selectedPortfolio: state.portfolio.selectedPortfolio

});

const mapDispatchToProps = (dispatch) => ({
  setData: data => dispatch(setData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
