import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage.page';
import SignInPage from './pages/SignInPage/SignInPage.page';

const App = () => {
  let auth = false;
  return (
    <div className="App">
      {auth ? <MainPage /> : <SignInPage />}
    </div>
  );
}

export default App;
