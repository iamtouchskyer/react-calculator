import React, {Component} from 'react';

import ToolbarItemBulkEdit from './toolbar-items/toolbar-item-bulk-edit.js';
import ToolbarItemDetails from './toolbar-items/toolbar-item-details.js';
import ToolbarItemAutomate from './toolbar-items/toolbar-item-automate.js';
import ToolbarItemInlineDownload from './toolbar-items/toolbar-item-inline-download.js';

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
                    <ToolbarItemDetails />
                    <ToolbarItemAutomate />
                    <ToolbarItemInlineDownload />
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