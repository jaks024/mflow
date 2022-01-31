import React from 'react';
import './SummaryPage.css'

class SummaryPage extends React.Component {
    render() {
        return (
            <div className="SummaryPage-body">
                <div className="SummaryPage-header-label SummaryPage-main-header-label">Summary</div>
                <div>
                    <div className="SummaryPage-header-label">This Month</div>
                    <div className="SummaryPage-income-expense-block">
                    <div className="SummaryPage-income-expense-line">
                            <span className="income-indicator">&#9650;</span> 
                            ${this.props.currentYearStatement.getMonthTotalIncome(this.props.currentMonth).toFixed(2)}
                        </div>
                        <div className="SummaryPage-income-expense-line">
                            <span className="expense-indicator">&#9660;</span> 
                            ${this.props.currentYearStatement.getMonthTotalExpense(this.props.currentMonth).toFixed(2)}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="SummaryPage-header-label">This Year</div>
                    <div className="SummaryPage-income-expense-block">
                        <div className="SummaryPage-income-expense-line">
                            <span className="income-indicator">&#9650;</span> 
                            ${this.props.currentYearStatement.totalIncome.toFixed(2)}
                        </div>
                        <div className="SummaryPage-income-expense-line">
                            <span className="expense-indicator">&#9660;</span> 
                            ${this.props.currentYearStatement.totalExpense.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SummaryPage;