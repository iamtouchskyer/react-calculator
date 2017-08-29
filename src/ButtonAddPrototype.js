import React, { Component } from 'react';

class ButtonComponent extends React.Component {
	render() {
  	return (
  	<button className="btn btn-primary col-xs-2" onClick={()=>this.props.clickCallback(this.props.incrementValue)}>&nbsp;+{this.props.incrementValue}&nbsp;</button>
   );
  }
}

class Result extends React.Component {
	render() {
  	return (<input className='form-control' type="text" readonly value={this.props.value} />);
  }
}

class AppComponent extends React.Component {
  constructor () {
    super();
    this.state = {clickCount:0};
  }

  handleClick(incrementalValue) {
    this.setState({clickCount : this.state.clickCount + incrementalValue});
  }

  render() {
      return (
        <div className="container panel panel-default">
          <div className="panel-heading">
            Button Add Prototype
          </div>
          <div className="panel-body">
            <ButtonComponent incrementValue={1} clickCallback={this.handleClick.bind(this)} />
            <ButtonComponent incrementValue={5} clickCallback={this.handleClick.bind(this)} />
            <ButtonComponent incrementValue={10} clickCallback={this.handleClick.bind(this)} />
            <ButtonComponent incrementValue={50} clickCallback={this.handleClick.bind(this)} />
            <ButtonComponent incrementValue={100} clickCallback={this.handleClick.bind(this)} />
            <Result value={this.state.clickCount} />
          </div>
        </div>
    );
  }
}

export default AppComponent;