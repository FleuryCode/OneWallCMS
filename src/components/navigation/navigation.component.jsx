import React from "react";
import './navigation.styles.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';
import {ReactComponent as StatsIcon} from '../../assets/statsIcon.svg';
import {ReactComponent as CalendarIcon} from '../../assets/calendarIcon.svg';

const Navigation = () => {
    let location = useLocation();
    return (
        <div className="navigationContainer">
            <Link to={'/'} className="navItem mt-4">
                <HomeIcon className="icons" fill={`${(location.pathname === '/') ? '#99EFA0' : '#d9d9d9'}`}/>
            </Link>
            <Link to={'/stats'} className="navItem">
                <StatsIcon className="icons" fill={`${(location.pathname === '/stats') ? '#99EFA0' : '#d9d9d9'}`} />
            </Link>
            <Link to={'/schedule'} className="navItem">
                <CalendarIcon className="icons" fill={`${(location.pathname === '/schedule') ? '#99EFA0' : '#d9d9d9'}`} />
            </Link>
        </div>
    );
}

export default Navigation;