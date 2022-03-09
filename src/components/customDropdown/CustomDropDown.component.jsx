import React, { useState } from 'react';
import './CustomDropDown.styles.scss';
import DownArrow from '../../assets/downArrow.svg';
import { connect } from 'react-redux';
import { setPageSelection } from '../../redux/textChanges/textChanges.actions';
import { setSelectedPortfolio } from '../../redux/portfolioUpdates/portfolioUpdates.actions';


const CustomDropDown = ({ section, pageList, setPageSelection, selectedPage, setSelectedPortfolio, selectedPortfolio }) => {
    const [menuClicked, setMenuClicked] = useState(false);

    let displayedItem = '';
    if (section === 'Home') {
        displayedItem = selectedPage
    } else if (section === 'Portfolio') {
        displayedItem = selectedPortfolio
    }


    const handleDropClick = () => {
        setMenuClicked(!menuClicked)
    }

    const handleServiceClick = (page) => {
        if (section === 'Home') {
            setPageSelection(page);
        } else if (section === 'Portfolio') {
            setSelectedPortfolio(page)
        }
        setMenuClicked(false);

    }
    return (
        <div className="dropdownContainer mx-auto my-3">
            <div onClick={handleDropClick} className="dropdown-selected">
                <p className='text-uppercase m-0 me-auto'>{displayedItem}</p>
                <img src={DownArrow} alt="Service Menu Drop Down" />
            </div>
            <div className={`${menuClicked ? 'display' : 'noDisplay'} dropdown-items`}>
                <div className='line-divider'></div>
                {pageList.map(page => (
                    <div onClick={() => handleServiceClick(page.page)} key={page.id} className='mt-2 item-container'>
                        <p>{page.page}</p>
                    </div>
                ))
                }
            </div>
        </div>
    );


}

const mapDispatchToProps = (dispatch) => ({
    setPageSelection: selection => dispatch(setPageSelection(selection)),
    setSelectedPortfolio: portfolio => dispatch(setSelectedPortfolio(portfolio))
});

const mapStateToProps = (state) => ({
    selectedPage: state.textChange.selectedPage,
    selectedPortfolio: state.portfolio.selectedPortfolio
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomDropDown);