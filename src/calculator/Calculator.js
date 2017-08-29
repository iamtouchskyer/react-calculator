import React from 'react';
import _ from 'underscore';
import CalculatorBtn from './CalculatorBtn.js';

class Calculator extends React.Component {
	constructor() {
        super();
        
        this.state = {
            displayValue: 0,
            shouldDisableNumber: false,  
        shoudDisableCalc: false,
        shoudDisableValueModifier: false,
        };
        
        this.calcFuncMap = {
            '+': (a, b) => ((_.isString(a) ? parseFloat(a) : a) + (_.isString(b) ? parseFloat(b) : b)).toString(),
            '-': (a, b) => ((_.isString(a) ? parseFloat(a) : a) - (_.isString(b) ? parseFloat(b) : b)).toString(),
            '*': (a, b) => ((_.isString(a) ? parseFloat(a) : a) * (_.isString(b) ? parseFloat(b) : b)).toString(),
            '/': (a, b) => ((_.isString(a) ? parseFloat(a) : a) / (_.isString(b) ? parseFloat(b) : b)).toString(),  
        };
        
        this.valueModifierFuncMap = {
            'AC': (a) => 0,
        '<-': (a) => a === '' ? a : a.slice(0,-1),
        '.': (a) => a.endsWith('.') ? a : a + '.',
        '%': (a) => a.startsWith('0.') ? a : '0.' + a,
        };
        
        this.values = [];
        this.operator = null;
        this.calcState = 'CalcValue';
    }
  
	handleClick(value) {
        let valueType = (value) => {
            if ("+-*/".includes(value)) return 'Operator';
            else if ("%.<-".includes(value)) return 'ValueModifier';
            else if ("=".includes(value)) return 'Result';
            else if ("0123456789".includes(value)) return 'Number';
            else if ('AC' === value) return 'AllClear';
            else return undefined;
        };
    
        let displayVal = this.state.displayValue == 0 ? '' : this.state.displayValue;

        switch (valueType(value)) {
            case 'Number':
                if (this.calcState !== 'TypingValue') {
                    displayVal = value;
                    this.values.push(displayVal);
                    this.calcState = 'TypingValue';
                } else {
                    displayVal = displayVal == 0 ? value : displayVal + value;
                    this.values[_.size(this.values) - 1] = displayVal;
                }
                break;
            case 'ValueModifier':
                displayVal = this.valueModifierFuncMap[value](displayVal);
                break;
            case 'Operator':
                this.operator = value;
                this.calcState = 'ChoosingOperator';
            case 'Result':
                if (_.size(this.values) === 2) {
                    displayVal = this.calcFuncMap[this.operator](this.values[0], this.values[1]);
                    this.values[0] = displayVal;
                }
                break;

            case 'AllClear':
                this.values.splice(0, _.size(this.values));
                this.operator = '';
                this.calcState = 'Start';
                displayVal = '0';

            default:
                break;
        }

        this.setState({ displayValue: displayVal == '' ? 0 : displayVal });
    }

    render() {
        return (
            <div className="calculator" >
                <div className="row">
                    <input type="text" name="numScreen" className="col-xs-12 form-control" value={this.state.displayValue} readOnly />
                </div>

                <div className="row" data-toggle="buttons" role="group">
                    <CalculatorBtn shouldHighlight={false} shouldDisable={false} callback={this.handleClick.bind(this)} value={'AC'} />
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableValueModifier} callback={this.handleClick.bind(this)} value={'<-'} />
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableCalc} callback={this.handleClick.bind(this)} value={'*'} />
                    <CalculatorBtn shouldHighlight={true} shouldDisable={this.state.shoudDisableCalc} callback={this.handleClick.bind(this)} value={'/'} />
                </div>
                <div className="row" data-toggle="buttons" role="group">
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'7'} />
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'8'} />
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'9'} />
                    <CalculatorBtn shouldHighlight={true} shouldDisable={this.state.shoudDisableCalc} callback={this.handleClick.bind(this)} value={'-'} />
                </div>
                <div className="row" data-toggle="buttons" role="group">
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'4'} />
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'5'} />
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'6'} />
                    <CalculatorBtn shouldHighlight={true} shouldDisable={this.state.shoudDisableCalc} callback={this.handleClick.bind(this)} value={'+'} />
                </div>
                <div className="row" data-toggle="buttons" role="group">
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'1'} />
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'2'} />
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'3'} />
                    <CalculatorBtn shouldHighlight={true} shouldDisable={this.state.shoudDisableValueModifier} callback={this.handleClick.bind(this)} value={'%'} />
                </div>
                <div className="row" data-toggle="buttons" role="group">
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} doubleSize={true} value={'0'} />
                    <CalculatorBtn shouldHighlight={false} shouldDisable={this.state.shoudDisableNumber} callback={this.handleClick.bind(this)} value={'.'} />
                    <CalculatorBtn shouldHighlight={true} shouldDisable={false} callback={this.handleClick.bind(this)} value={'='} />
                </div>
            </div>
        );
    }
}

export default Calculator;