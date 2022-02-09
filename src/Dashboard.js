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
            allAnnualStatements: [],
        }
    }

    getCurrentAnnualStatement() {
        if (this.state.allAnnualStatements.length === 0) {
            return null;
        }
        console.log(this.state.currentYearIndex);
        return this.state.allAnnualStatements[this.state.currentYearIndex];
    }

    setCurrentAnnualStatement(newStatement) {
        let newAllAnnualStatement = this.state.allAnnualStatements;
        newAllAnnualStatement[this.state.currentYearIndex] = newStatement;
        this.setState({allAnnualStatements: newAllAnnualStatement});
    }

    addNewAnnualStatementWithEntry(entry) {
        const newAllAnnualStatements = this.state.allAnnualStatements;
        const newAnnualStatement = new AnnualStatement(entry.date.year);
        newAnnualStatement.addCategory(entry.category);
        newAnnualStatement.addEntryToMonthStatement(entry.date.month, entry);
        newAllAnnualStatements.push(newAnnualStatement);
        const newCurrentYearIndex = newAllAnnualStatements.length - 1;
        this.setState({allAnnualStatements: newAllAnnualStatements,
            currentYearIndex: newCurrentYearIndex,
            currentMonth: entry.date.month});
        console.log(newAllAnnualStatements);
    }

    handleNewEntry = (entry) => {
        if (this.getCurrentAnnualStatement() === null) {
            this.addNewAnnualStatementWithEntry(entry);
            return;
        }

        const newCurrentAnnualStatement = this.getCurrentAnnualStatement();
        let annualStatementIndex = this.state.currentYearIndex;
        if (entry.date.year !== newCurrentAnnualStatement.year) {
            let yearDNE = true;
            this.state.allAnnualStatements.forEach((statement, i) => {
                if (statement.year === entry.date.year) {
                    yearDNE = false;
                    annualStatementIndex = i;
                } 
            });
            if (yearDNE) {
                this.addNewAnnualStatementWithEntry(entry);
                return;
            } 
        } 
        const newAllAnnualStatements = this.state.allAnnualStatements;
        newAllAnnualStatements[annualStatementIndex].addCategory(entry.category);
        newAllAnnualStatements[annualStatementIndex].addEntryToMonthStatement(entry.date.month, entry);
        this.setState({allAnnualStatements: newAllAnnualStatements,
            currentYearIndex: annualStatementIndex,
            currentMonth: entry.date.month})

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
        const currentAnnualStatement = this.getCurrentAnnualStatement();
        if (currentAnnualStatement == null) {
            return null;
        }
        currentAnnualStatement.monthlyStatements.forEach(monthStatement => {
            if (!monthStatement.isStatementEmpty()) {
                month.push(monthStatement.month);
            }
        });
        console.log(month);
        return month;
    }

    handleChangeViewYear = (year) => {
        const allAnnualStatements = this.state.allAnnualStatements;
        for(let i = 0; i < allAnnualStatements.length; ++i) {
            if (allAnnualStatements[i].year === year) {
                let firstAvailableMonth = -1;
                allAnnualStatements[i].monthlyStatements.forEach(monthStatement => {
                    if (!monthStatement.isStatementEmpty()) {
                        firstAvailableMonth = monthStatement.month;
                    }
                });

                this.setState({currentYearIndex: i, currentMonth: firstAvailableMonth});
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