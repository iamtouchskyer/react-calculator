import React, {Component} from 'react';

class ToolbarItemBulkEdit extends Component {

    render() {
        return (
            <div id="ToolbarItemChangeBudget">
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

                            <label className="control-label"> Daily Budget </label>
                            <div className="input-group">
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
        );
    }
}

export default ToolbarItemBulkEdit;