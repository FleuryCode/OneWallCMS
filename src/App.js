import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage.page';
import SignInPage from './pages/SignInPage/SignInPage.page';
import { connect } from 'react-redux';
import { setData } from './redux/textChanges/textChanges.actions';
import { firestore, fireStorage } from './firebase/firebase.utils';
import { ref } from "firebase/storage";

const App = ({ currentUser, isLoggedIn, setData }) => {

  // Grabbing Collection TextChanges
  const textChangesRef = firestore.collection('TextChanges');
  textChangesRef.onSnapshot(async snapshot => {
    const docArray = snapshot.docs;
    setData(docArray);
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
  setData: data => dispatch(setData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
