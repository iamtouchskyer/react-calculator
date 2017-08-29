import React from 'react';

class CalculatorBtn extends React.Component {
	render() {
  	let classname = "btn ";
    classname += this.props.shouldHighlight ? "btn-warning " : "btn-default ";
    classname += this.props.doubleSize ? "col-xs-6" : "col-xs-3";
    
		return (
			  	<button disabled={this.props.shouldDisable} className={classname} onClick={() => {this.props.callback(this.props.value)}}  > {this.props.value} </button>
			);
	}
}

export default CalculatorBtn;