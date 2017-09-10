import React from 'react';
import _ from 'underscore';

class WunderbarPanel extends React.Component {
    constructor() {
        super();

        this.metaData = [
            {
                title: "All Campaigns", children: [
                    {title:'Campaig111', link:'#'},
                    {title:'Campaig112n', link:'#'},
                    {title:'Campaig212n', link:'#'},
                    {title:'Campaig232n', link:'#'},
                    {title:'Campaig252n', link:'#'},
                    {title:'Campaig221m', link:'#'},
                    {title:'Campaig222m', link:'#'},
                    {title:'Campaig223m', link:'#'},
                ],
            },
            {
                title: "Shared Library", children: [
                    {title:'Audience', link:'#AudiencePage'},
                    {title:'Budget', link:'#'},
                    {title:'Negative keywords', link:'#NegativeKeywordsPage'},
                    {title:'URL options', link:'#URLOptionsPage'},
                ],
            },
            {
                title: "Conversion Tracking", children: [
                    {title:'UET tags', link:'#UETTagsPage'},
                    {title:'Conversion goals', link:'#ConversionGoalsPage'},
                ],
            },
            {
                title: "Bulk Operations", children: [
                    {title:'Automated rules', link:'#AutomatedRulesPage'},
                    {title:'Bulk edits', link:'#BulkEditsPage'},
                ],
            },
        ];

        this.panels = _.map(this.metaData, (item) => {
            let list = _.map(item.children, (subItem) => {
                return (
                    <li className="list-group-item"><a href={subItem.link}>{subItem.title}</a></li>
                );
            });

            return (
                <div className="panel panel-default">
                    <div className="panel-headering">
                        <div className="panel-title">
                            {item.title}
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="list-box">
                            {list}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="panel-group">
                {this.panels}
            </div>
        );
    }

}

export default WunderbarPanel;