import React from "react";
import './HistoryPage.css'
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import GridColumn from "./GridColumn";

class HistoryPage extends React.Component {


    renderAllCategories(categories) {
        return categories.map((category) => {
            console.log("render " + category);
            return <GridColumn key={category + "-column"} columnContent={[category]} />;
        });
    }

    renderAllEntries(entries) {
        return entries.map((entry) => {
            return this.renderEntry(entry);
        });
    }

    renderEntry(entry) {
        return (
            <div key={entry.id} className="HistoryPage-entry">
                <div className="HistoryPage-entry-main">
                    <div>{entry.date}</div>
                    <div>{entry.category}</div>
                    <div>{entry.location}</div>
                    <div><span className="income-indicator">&#9650;</span>${entry.income}</div>
                    <div><span className="expense-indicator">&#9660;</span>${entry.expense}</div>
                </div>
                <div className="HistoryPage-entry-collapse">
                    {entry.description}
                </div>
            </div>   
        );
    }

    render() {
        return (
            <div className="HistoryPage-body">
                <div className="HistoryPage-header-label">History</div>
                <div className="HistoryPage-content" data-simplebar data-simplebar-auto-hide="false">
                    <div className="HistoryPage-grid">
                        {this.renderAllCategories(this.props.currentYearStatement.categories)}
                        {this.renderAllEntries(this.props.currentYearStatement.getMonthEntries(this.props.currentMonth))}
                    </div>
                </div>
            </div>
        )
    }


}

export default HistoryPage;