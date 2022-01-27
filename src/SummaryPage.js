import React from 'react';
import './SummaryPage.css'

class SummaryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMonthIncome: 0,
            currentMonthExpense: 0,
            currentYearIncome: 0,
            currentYearExpense: 0,
        }
    }

    update(annualStatement, month) {
        // it wants the thing to be mounted
        this.state.currentMonthIncome = annualStatement.getMonthTotalIncome(month);
        this.state.currentMonthExpense = annualStatement.getMonthTotalExpense(month);
        this.state.currentYearIncome = annualStatement.totalIncome;
        this.state.currentYearExpense = annualStatement.totalExpense;
    }

    render() {
        return (
            <div>
                <div className="SummaryPage-header-label">Summary</div>
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
        );
    }
}

export default SummaryPage;