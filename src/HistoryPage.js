import React from "react";
import './HistoryPage.css'
import 'simplebar'; 
import 'simplebar/dist/simplebar.css';
import GridRow from "./GridRow";

class HistoryPage extends React.Component {

    renderGrid(categories) {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let dates = [["Dates"]];
        for (let i = 0; i < 31; i++) {
            dates.push([months[this.props.currentMonth - 1] + " " + (i + 1) + ", " + this.props.currentYearStatement.year]);
        }

        return dates.map((date, i) => {
            if (date[0] === "Dates") {
                let headerRowContent = [date];
                categories.forEach(categoryName => {
                    headerRowContent.push([categoryName]);
                });
                console.log(headerRowContent);
                return <GridRow key={GridRow.newRowId() + "-row"} rowContent={headerRowContent} isHeaderRow={true}/>
            } else {

                let entries = this.props.currentYearStatement.getMonthEntries(this.props.currentMonth);
                let rowContent = [date];
                categories.forEach(categoryName => {
                    rowContent.push([]);
                    entries.forEach(entry => {
                        if (entry.category === categoryName && entry.date.day === +i) {
                            console.log(entry);
                            rowContent[rowContent.length - 1].push(this.renderEntry(entry));
                        }
                    });                
                });
                console.log(rowContent);
                return <GridRow key={GridRow.newRowId() + "-row"} rowContent={rowContent} isHeaderRow={false}/>
            }
        })
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
                            {this.renderGrid(this.props.currentYearStatement.categories)}
                    </div>
                </div>
            </div>
        )
    }


}

export default HistoryPage;