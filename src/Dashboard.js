import React from "react";
import SummaryPage from "./SummaryPage";
import './Dashboard.css'
import AddPage from "./AddPage";
import HistoryPage from "./HistoryPage";
import MonthStatement from "./MonthStatement";
import AnnualStatement from "./AnnualStatement";


class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentMonth: 1,
            currentYearStatement: new AnnualStatement(0, "2022"),
            summaryPage: new SummaryPage(props),
            historyPage: new HistoryPage(props),
        }
    }

    handleNewEntry = (e) => {
        this.state.historyPage.handleNewEntry(e);
        console.log("added new entry");
        this.state.currentYearStatement.addEntryToMonthStatement(this.state.currentMonth, e);
        this.state.summaryPage.update(this.state.currentYearStatement, this.state.currentMonth);
        this.forceUpdate();
    }

    render() {
        return (
            <div className="Dashboard-body">
                <div className="Dashboard-header">
                    <div className="Dashboard-header-label">MFlow</div>
                </div>
                <div className="Dashboard-content">
                    <div>
                        {this.state.summaryPage.render()}
                        <br/>
                        <AddPage onAdd={this.handleNewEntry}/>
                    </div>
                    <div className="Dashboard-content-right">
                       {this.state.historyPage.render()}
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Dashboard;