import React from "react";
import SummaryPage from "./SummaryPage";
import './Dashboard.css'
import AddPage from "./AddPage";
import HistoryPage from "./HistoryPage";
import AnnualStatement from "./AnnualStatement";
import 'simplebar'; 
import 'simplebar/dist/simplebar.css';

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

    handleNewCategory = (c) => {
        const newCurrentYearStatement = this.state.currentYearStatement;
        if (newCurrentYearStatement.addCategory(c)) {
            this.setState({currentYearStatement: newCurrentYearStatement})
        }
    }

    render() {
        return (
            <div className="Dashboard-body">
                <div className="Dashboard-content">
                    <div className="Dashbaord-content-left" >
                        <div className="Dashboard-header">
                            <div className="Dashboard-header-label">MFlow</div>
                        </div>
                        <div className="Dashboard-content-left-scrollabe" data-simplebar>
                            <SummaryPage currentYearStatement={this.state.currentYearStatement}
                                        currentMonth={this.state.currentMonth} />
                            <br/>
                            <AddPage currentYearStatement={this.state.currentYearStatement} 
                                    onAddEntry={this.handleNewEntry}
                                    onAddCategory={this.handleNewCategory}/>
                        </div>

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