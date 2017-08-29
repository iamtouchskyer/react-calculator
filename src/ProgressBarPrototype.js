import React from 'react';

class ProgressBarPrototype extends React.Component {
	constructor() {
  	super();
  	this.state = {
    	percentage: 0
    };
  }
  
  componentDidMount() {    
  	this.callBack = setInterval(function() {
    		this.setState({percentage:this.state.percentage+1});
        if (this.state.percentage >= 100) {
        	clearInterval(this.callBack);	
        }
    }.bind(this), 100);
  }
  
	render() {
  	let progressBarStyle = {
    	width: this.state.percentage + '%'
    };
    
    let classname =  "progress-bar ";
    
    classname += this.state.percentage < 25 ? "progress-bar-danger" : this.state.percentage < 50 ? "progress-bar-warning" :  this.state.percentage < 75 ? "progress-bar-info" : "progress-bar-success";
    
  	return (
        <div className="container panel panel-default">
            <div className="panel-heading">
              Progress Bar Prototype
            </div>
            <div className="panel-body">
                <div className="progress">
                    <span className={classname} style={progressBarStyle}> {this.state.percentage + '%'}</span>
                </div>
            </div>
        </div>
    );
  }
}


export default ProgressBarPrototype;