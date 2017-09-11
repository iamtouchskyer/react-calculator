import React, {Component} from 'react';

class ToolbarItemInlineDownload extends Component {
    render() {
        return (
            <button className="btn btn-default" role="button"><span className="glyphicon glyphicon glyphicon-download-alt"></span>Download</button>
        );
    }
}

export default ToolbarItemInlineDownload;