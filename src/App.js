import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage.page';
import SignInPage from './pages/SignInPage/SignInPage.page';
import { connect } from 'react-redux';

const App = ({currentUser, isLoggedIn}) => {
  
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

export default connect(mapStateToProps)(App);
