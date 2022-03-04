import React from 'react';
import './CustomDropDown.styles.scss';
import DownArrow from '../../assets/downArrow.svg';
import { connect } from 'react-redux';
import { setSelectedService, setServiceDuration, setDidSelectService } from '../../redux/booking-info/booking.actions';

class CustomDropDown extends React.Component {
    constructor() {
        super();
        this.state = {
            menuClicked: false
        }
    }
    render() {
        
        const handleDropClick = () => {
            this.setState({
                menuClicked: !this.state.menuClicked
            });
        }

        const handleServiceClick = (service, serviceDuration) => {
            console.log(service);
            this.props.setSelectedService(service);
            this.props.setServiceDuration(serviceDuration);
            this.props.setDidSelectService(true);
            this.setState({
                menuClicked: false
            });
            
        }
        return (
            <div className="dropdownContainer">
                <div onClick={handleDropClick} className="dropdown-selected">
                    <p className='text-uppercase m-0 me-auto'>{this.props.selectedService}</p>
                    <img src={DownArrow} alt="Service Menu Drop Down" />
                </div>
                <div className={`${this.state.menuClicked ? 'display' : 'noDisplay'} dropdown-items`}>
                    <div className='line-divider'></div>
                    {this.props.serviceList.map(service => (
                        <div onClick={() => handleServiceClick(service.service, service.timeBracket)} key={service.id} className='mt-2 item-container'>
                            <p>{service.service}</p>
                        </div>
                    ))
                    }

                </div>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    setSelectedService: selectedService => dispatch(setSelectedService(selectedService)),
    setServiceDuration: serviceDuration => dispatch(setServiceDuration(serviceDuration)),
    setDidSelectService: didSelectService => dispatch(setDidSelectService(didSelectService))
});

const mapStateToProps = (state) => ({
    selectedService: state.booking.selectedService
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomDropDown);