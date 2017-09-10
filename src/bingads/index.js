import React from 'react';
import _ from 'underscore';
import Header from './header.js';
import Wunderbar from './wunderbar.js';

class BingAds extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                
                <div style={{width: '100%'}}> 
                    <div style={{float:'left', width: '15%'}}>
                        <Wunderbar />
                    </div> 
                    <div style={{float:'right'}}> </div> 
                </div>
                <div style={{clear:'both'}}></div>
            </div>
        );
    }
};

export default BingAds;