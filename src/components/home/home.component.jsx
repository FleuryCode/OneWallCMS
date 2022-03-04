import React, { useState, useEffect } from "react";
import './home.styles.scss';

import { firestore } from '../../firebase/firebase.utils';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            homePageData: {}
        }
    }

    componentDidMount() {
        // Grabbing Collection TextChanges
        const textChangesRef = firestore.collection('TextChanges');
        textChangesRef.onSnapshot(async snapshot => {
            const docArray = snapshot.docs;

            // Homepage
            const homePageInfo = docArray[0].data();
            this.setState({
                homePageData: homePageInfo
            });
        });
    }
    render() {
        const { homePageData } = this.state;
        return (
            <div className="homeContainer container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Update the Website</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="infoBox">
                            <h4>{homePageData.HeroBody}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;