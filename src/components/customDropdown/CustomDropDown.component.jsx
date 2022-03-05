import React from 'react';
import './CustomDropDown.styles.scss';
import DownArrow from '../../assets/downArrow.svg';
import { connect } from 'react-redux';
import { setPageSelection } from '../../redux/textChanges/textChanges.actions';


class CustomDropDown extends React.Component {
    constructor() {
        super();
        this.state = {
            menuClicked: false,
            selectedItem: 'Homepage'
        }
    }
    render() {
        const { pageList, setPageSelection } = this.props;
        const { menuClicked, selectedItem } = this.state;
        const handleDropClick = () => {
            this.setState({
                menuClicked: !menuClicked
            });
        }

        const handleServiceClick = (page) => {
            setPageSelection(page);
            this.setState({
                menuClicked: false,
                selectedItem: page
            });

        }
        return (
            <div className="dropdownContainer mx-auto my-3">
                <div onClick={handleDropClick} className="dropdown-selected">
                    <p className='text-uppercase m-0 me-auto'>{selectedItem}</p>
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

}

const mapDispatchToProps = (dispatch) => ({
    setPageSelection: selection => dispatch(setPageSelection(selection))
});

export default connect(null, mapDispatchToProps)(CustomDropDown);