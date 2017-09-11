import React, {Component} from 'react';

import ToolbarItemBulkEdit from './toolbar-items/toolbar-item-bulk-edit.js';

class Toolbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="btn-toolbar">
                <div className="btn-group btn-group-primary">
                    <button className="btn btn-primary">Create Campaign</button>
                    <ToolbarItemBulkEdit />
                    <ToolbarItemBulkEdit />
                    <ToolbarItemBulkEdit />
                    <ToolbarItemBulkEdit />
                </div>
                
                <div className="btn-group btn-group-secondary">
                    <ToolbarItemBulkEdit />
                    <ToolbarItemBulkEdit />
                </div>
            </div>
        );
    }
}

export default Toolbar;