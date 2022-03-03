import React from "react";
import './navigation.styles.scss';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/homeIcon.svg';
import StatsIcon from '../../assets/statsIcon.svg';
import CalendarIcon from '../../assets/calendarIcon.svg';

const Navigation = () => {
    return (
        <div className="navigationContainer">
            <Link to={'/'} className="navItem mt-4">
                <img src={HomeIcon} alt="Home icon" />
            </Link>
            <Link to={'/'} className="navItem">
                <img src={StatsIcon} alt="Stats icon" />
            </Link>
            <Link to={'/'} className="navItem">
                <img src={CalendarIcon} alt="Calendar icon" />
            </Link>
        </div>
    );
}

export default Navigation;