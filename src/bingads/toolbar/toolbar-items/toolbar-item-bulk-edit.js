import React, {Component} from 'react';

class ToolbarItemBulkEdit extends Component {

    render() {
        return (
            <span className="dropdown">
                <button className="btn btn-default" data-toggle="dropdown" >Edit<span className="caret"></span></button>
                <ul className="dropdown-menu"> 
                    <li><a href="#"><span className="glyphicon glyphicon-play"></span>&nbsp;Enable</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-pause"></span>&nbsp;Pause</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-stop"></span>&nbsp;Delete</a></li>
                    <li className="divider"></li>
                    <li><a href="#" data-toggle="collapse" data-target="#ToolbarItemChangeBudget">Change budgets</a></li>
                    <li><a href="#" data-toggle="collapse" data-target="#ToolbarItemOtherChange">Other changes</a></li>
                </ul>

                <div className="collapse" id="ToolbarItemChangeBudget">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="panel-title">
                            Change budgets (x campaigns selected)
                            </div>
                        </div>

                        <div className="form-inline">
                            <div className="form-group">
                                <label className="control-label">Action</label>
                                <select className="form-control">
                                    <option>Set</option>
                                    <option>Increase</option>
                                    <option>Descrease</option>
                                </select>

                                <div className="input-group">
                                    <label> Daily Budget </label>
                                    <input className="form-control" type="text" placeholder="0"/>
                                    <div className="input-group-addon">USD</div>
                                </div>
                            </div>
                        </div>

                        <div className="btn-toolbar">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-default">Preview</button>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-default">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}

export default ToolbarItemBulkEdit;