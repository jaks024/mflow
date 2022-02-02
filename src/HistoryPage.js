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
            dates.push([months[this.props.currentMonth - 1] + " " + (i + 1) + ", " + this.props.currentAnnualStatement.year]);
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

                let entries = this.props.currentAnnualStatement.getMonthEntries(this.props.currentMonth);
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

    renderSelectOption(options) {
        return options.map((op) => {
            return <option key={op + "-view-option"} value={op}>{op}</option>;
        });
    }

    onChangeViewYear = (e) => {
        const year = e.target.value;
        this.props.onChangeViewYear(year);
    }

    onChangeViewMonth =(e) => {
        const month = e.target.value;
        this.props.onChangeViewMonth(month);
    }

    render() {
        return (
            <div className="HistoryPage-body">
                <div className="HistoryPage-header-content">
                    <div className="HistoryPage-header-label">History</div>
                    <select className="HistoryPage-header-select" onChange={(e) => this.onChangeViewYear(e)}>
                        {this.renderSelectOption(this.props.availableYears)}
                    </select>
                    <select className="HistoryPage-header-select" onChange={(e) => this.onChangeViewMonth(e)}>
                        {this.renderSelectOption(this.props.availableMonths)}
                    </select>
                </div>
                <div className="HistoryPage-content" data-simplebar data-simplebar-auto-hide="false">
                    <div className="HistoryPage-grid">
                            {this.renderGrid(this.props.currentAnnualStatement.categories)}
                    </div>
                </div>
            </div>
        )
    }


}

export default HistoryPage;