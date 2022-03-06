import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import './MainPage.styles.scss';
import { Routes, Route } from "react-router-dom";
import Home from '../../components/home/home.component';
import Stats from '../../components/stats/stats.component';
import Schedule from '../../components/schedule/schedule.component';
import PortfoliosSection from "../../components/portfolios/portfolios.component";

const MainPage = () => {
    return (
        <div className="mainPageContainer">
            <Navigation />
            <div className='servicesContainer ms-auto'>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/portfolios' element={<PortfoliosSection />} />
                    <Route exact path='/stats' element={<Stats />} />
                    <Route exact path='/schedule' element={<Schedule />} />
                </Routes>
            </div>
        </div>
    );
}

export default MainPage;