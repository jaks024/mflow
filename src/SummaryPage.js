import React from 'react';
import Entry from './Entry';
import './SummaryPage.css'

class SummaryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMonthIncome: 123,
            currentMonthExpense: 3235,
            currentYearIncome: 4530,
            currentYearExpense: 6450,
        }
    }
    
    renderEntry(entry) {
        return (
            <div className="SummaryPage-entry">
                <div className="SummaryPage-entry-main">
                    <div>{entry.date}</div>
                    <div>{entry.category}</div>
                    <div>{entry.location}</div>
                    <div><span className="income-indicator">&#9650;</span>${entry.income}</div>
                    <div><span className="expense-indicator">&#9660;</span>${entry.expense}</div>
                </div>
                <div className="SummaryPage-entry-collapse">
                    {entry.description}
                </div>
            </div>   
        );
    }

    render() {
        return (
            <div>
                <div className="SummaryPage-header">
                    <div>
                        <div className="SummaryPage-header-label">This Month</div>
                        <div className="SummaryPage-income-expense-block">
                        <div className="SummaryPage-income-expense-line">
                                <span className="income-indicator">&#9650;</span> ${this.state.currentMonthIncome}
                            </div>
                            <div className="SummaryPage-income-expense-line">
                                <span className="expense-indicator">&#9660;</span> ${this.state.currentMonthExpense}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="SummaryPage-header-label">This Year</div>
                        <div className="SummaryPage-income-expense-block">
                            <div className="SummaryPage-income-expense-line">
                                <span className="income-indicator">&#9650;</span> ${this.state.currentYearIncome}
                            </div>
                            <div className="SummaryPage-income-expense-line">
                                <span className="expense-indicator">&#9660;</span> ${this.state.currentYearExpense}
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <div>
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}
                    {this.renderEntry(new Entry("Jan 24, 2022", 123, 456, "Groceries", "Sobeys", "Bought groceries") )}

                </div>
            </div>
        );
    }
}

export default SummaryPage;