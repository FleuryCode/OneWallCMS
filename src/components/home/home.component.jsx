import React from "react";
import './home.styles.scss';

import { firestore } from '../../firebase/firebase.utils';
import EditBox from "../editBox/editBox.component";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            displayedData: {},
            pickedPage: 'Homepage'
        }
    }

    componentDidMount() {
        // Grabbing Collection TextChanges
        const textChangesRef = firestore.collection('TextChanges');


        textChangesRef.onSnapshot(async snapshot => {
            const docArray = snapshot.docs;

            for (let i = 0; i < docArray.length; i++) {
                const id = docArray[i].id;
                if (id === this.state.pickedPage) {
                    const data = docArray[i].data();
                    this.setState({
                        displayedData: data
                    });
                }
            }
        });
    }
    render() {
        const { displayedData, pickedPage } = this.state;
        const dataKeys = Object.keys(displayedData);



        return (
            <div className="homeContainer container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Update the Website</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
                <div className="row">
                    {
                        dataKeys.map(key => (
                            <div key={key} className="col-12 mb-3">
                                <EditBox header={key} body={displayedData[key]} pickedPage={pickedPage} />
                            </div>
                        ))
                    }

                </div>
            </div>
        );
    }
}

export default Home;