import React from "react";
import SummaryPage from "./SummaryPage";
import './Dashboard.css'
import AddPage from "./AddPage";
import HistoryPage from "./HistoryPage";
import AnnualStatement from "./AnnualStatement";


class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentMonth: 1,
            currentYearStatement: new AnnualStatement(0, "2022"),
        }
    }

    handleNewEntry = (e) => {
        const newCurrentYearStatement = this.state.currentYearStatement;
        newCurrentYearStatement.addEntryToMonthStatement(this.state.currentMonth, e);
        this.setState({currentYearStatement: newCurrentYearStatement})
    }

    render() {
        return (
            <div className="Dashboard-body">
                <div className="Dashboard-content">
                    <div className="Dashbaord-content-left">
                    <div className="Dashboard-header">
                        <div className="Dashboard-header-label">MFlow</div>
                    </div>
                        <SummaryPage currentYearStatement={this.state.currentYearStatement}
                                     currentMonth={this.state.currentMonth} />
                        <br/>
                        <AddPage currentYearStatement={this.state.currentYearStatement} 
                                 onAdd={this.handleNewEntry}/>
                    </div>
                    <div className="Dashboard-content-right">
                       <HistoryPage currentYearStatement={this.state.currentYearStatement} 
                                    currentMonth={this.state.currentMonth}/>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Dashboard;