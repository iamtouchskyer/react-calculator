import React, {Component} from 'react';

import ToolbarItemBulkEdit from './toolbar-items/toolbar-item-bulk-edit.js';
import ToolbarItemDetails from './toolbar-items/toolbar-item-details.js';
import ToolbarItemAutomate from './toolbar-items/toolbar-item-automate.js';
import ToolbarItemInlineDownload from './toolbar-items/toolbar-item-inline-download.js';
import ToolbarInlineViewChangeBudget from './toolbar-inline-views/toolbar-inline-view-change-budget.js';

class BingAdsToolbar extends Component {
    constructor() {
        super();

        this.toolbarElement = (
            <div className="btn-toolbar">
                <div className="btn-group btn-group-primary">
                    <button className="btn btn-primary">Create Campaign</button>
                    <ToolbarItemBulkEdit callback={this.handleToolbarItemClick.bind(this)}/>
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

        this.state = ({renderringElement: this.toolbarElement});
    }

    handleToolbarItemClick(theElementKey) {
        switch (theElementKey) {
            case 'BulkEditEnable':
            case 'BulkEditPause':
            case 'BulkEditDelete':
                break;

            case 'BulkEditChangeBudget':
                this.setState({renderringElement:<ToolbarInlineViewChangeBudget />});
                break;

            default:
                break;
        }
    }

    render() {
        return this.state.renderringElement;
    }
}

export default BingAdsToolbar;