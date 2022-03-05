import React from "react";
import './home.styles.scss';
import EditBox from "../editBox/editBox.component";
import CustomDropDown from '../customDropdown/CustomDropDown.component';
import { connect } from 'react-redux';

const Home = ({ data, selectedPage }) => {

    let mainData = {}
    for (let i = 0; i < data.length; i++) {
        const id = data[i].id;
        if (id === selectedPage) {
            mainData = data[i].data();
        }
    }

    const dataKeys = Object.keys(mainData);
    dataKeys.sort();
    const pageList = [
        {
            id: 1,
            page: 'Homepage'
        },
        {
            id: 2,
            page: 'About'
        },
        {
            id: 3,
            page: 'Services'
        },
    ];

    return (
        <div className="homeContainer container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Update the Website</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <CustomDropDown pageList={pageList} />
                </div>
            </div>
            <div className="row">
                {
                    dataKeys.map(key => (
                        <div key={key} className="col-12 mb-3">
                            <EditBox header={key} body={mainData[key]} pickedPage={selectedPage} />
                        </div>
                    ))
                }

            </div>
        </div>
    );

}



const mapStateToProps = (state) => ({
    selectedPage: state.textChange.selectedPage,
    data: state.textChange.data
});

export default connect(mapStateToProps)(Home);