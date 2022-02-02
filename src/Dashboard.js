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
            currentYearIndex: 0,
            allAnnualStatements: [new AnnualStatement(0, "2022"), new AnnualStatement(1, "2023")],
        }
    }

    getCurrentAnnualStatement() {
        return this.state.allAnnualStatements[this.state.currentYearIndex];
    }

    setCurrentAnnualStatement(newStatement) {
        let newAllAnnualStatement = this.state.allAnnualStatements;
        newAllAnnualStatement[this.state.currentYearIndex] = newStatement;
        this.setState({allAnnualStatements: newAllAnnualStatement});
    }

    handleNewEntry = (entry) => {
        const newCurrentAnnualStatement = this.getCurrentAnnualStatement();
        if (entry.date.year !== newCurrentAnnualStatement.year) {
            let yearDNE = true;
            this.state.allAnnualStatements.forEach(statement => {
                if (statement.year === entry.date.year) {
                    yearDNE = false;
                } 
            });
            if (yearDNE) {
                let newAllAnnualStatements = this.state.allAnnualStatements;
                let newAnnualStatement = new AnnualStatement(2, entry.date.year);
                newAnnualStatement.addCategory(entry.category);
                newAnnualStatement.addEntryToMonthStatement(entry.date.month, entry);
                newAllAnnualStatements.push(newAnnualStatement);
                this.setState({allAnnualStatements: newAllAnnualStatements});
            }
        } else {
            newCurrentAnnualStatement.addCategory(entry.category);
            newCurrentAnnualStatement.addEntryToMonthStatement(entry.date.month, entry);
            this.setState({currentYearStatement: newCurrentAnnualStatement})
        }

    }

    handleNewCategory = (c) => {
        const newCurrentAnnualStatement = this.getCurrentAnnualStatement();
        if (newCurrentAnnualStatement.addCategory(c)) {
            this.setCurrentAnnualStatement(newCurrentAnnualStatement);
        }
    }

    getAvailableYears() {
        let years = [];
        this.state.allAnnualStatements.forEach(statement => {
            console.log(statement);
            years.push(statement.year);
        });
        console.log(years);
        return years;
    }

    getAvailableMonths() {
        let month = [];
        this.getCurrentAnnualStatement().monthlyStatements.forEach(monthStatement => {
            if (!monthStatement.isStatementEmpty()) {
                month.push(monthStatement.month);
            }
        });
        console.log(month);
        return month;
    }

    handleChangeViewYear = (year) => {
        console.log(year);
        const allAnnualStatements = this.state.allAnnualStatements;
        for(let i = 0; i < allAnnualStatements.length; ++i) {
            if (allAnnualStatements[i].year === year) {
                this.setState({currentYearIndex: i});
                return;
            }
        }
    }

    handleChangeViewMonth = (month) => {
        console.log(month);
        this.setState({currentMonth: month});
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
                            <SummaryPage currentAnnualStatement={this.getCurrentAnnualStatement()}
                                        currentMonth={this.state.currentMonth} />
                            <br/>
                            <AddPage currentAnnualStatement={this.getCurrentAnnualStatement()} 
                                    onAddEntry={this.handleNewEntry}
                                    onAddCategory={this.handleNewCategory}/>
                        </div>

                    </div>
                    <div className="Dashboard-content-right">
                       <HistoryPage currentAnnualStatement={this.getCurrentAnnualStatement()} 
                                    currentMonth={this.state.currentMonth}
                                    onChangeViewYear={this.handleChangeViewYear}
                                    onChangeViewMonth={this.handleChangeViewMonth}
                                    availableYears={this.getAvailableYears()}
                                    availableMonths={this.getAvailableMonths()}/>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Dashboard;