import React from 'react';
import './SummaryPage.css'

class SummaryPage extends React.Component {

    getMonthTotalIncome() {
        if (this.props.currentAnnualStatement !== null) {
            return this.props.currentAnnualStatement.getMonthTotalIncome(this.props.currentMonth).toFixed(2);
        }
        return 0;
    }

    getMonthTotalExpense() {
        if (this.props.currentAnnualStatement !== null) {
            return this.props.currentAnnualStatement.getMonthTotalExpense(this.props.currentMonth).toFixed(2);
        }
        return 0;
    }

    getAnnualTotalIncome() {
        if (this.props.currentAnnualStatement !== null) {
            return this.props.currentAnnualStatement.totalIncome.toFixed(2)
        }
        return 0;
    }

    getAnnualTotalExpense() {
        if (this.props.currentAnnualStatement !== null) {
            return this.props.currentAnnualStatement.totalExpense.toFixed(2);
        }
        return 0;
    }

    render() {
        return (
            <div className="SummaryPage-body">
                <div className="SummaryPage-header-label SummaryPage-main-header-label">Summary</div>
                <div>
                    <div className="SummaryPage-header-label">This Month</div>
                    <div className="SummaryPage-income-expense-block">
                        <div className="SummaryPage-income-expense-line">
                            <span className="income-indicator">&#9650;</span> 
                            ${this.getMonthTotalIncome()}
                        </div>
                        <div className="SummaryPage-income-expense-line">
                            <span className="expense-indicator">&#9660;</span> 
                            ${this.getMonthTotalExpense()}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="SummaryPage-header-label">This Year</div>
                    <div className="SummaryPage-income-expense-block">
                        <div className="SummaryPage-income-expense-line">
                            <span className="income-indicator">&#9650;</span> 
                            ${this.getAnnualTotalIncome()}
                        </div>
                        <div className="SummaryPage-income-expense-line">
                            <span className="expense-indicator">&#9660;</span> 
                            ${this.getAnnualTotalExpense()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SummaryPage;