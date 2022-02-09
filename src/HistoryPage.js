import React from "react";
import './HistoryPage.css'
import 'simplebar'; 
import 'simplebar/dist/simplebar.css';
import GridRow from "./GridRow";

class HistoryPage extends React.Component {

    renderGrid(annualStatement) {
        if (annualStatement === null) {
            return;
        }
        const categories = annualStatement.categories;
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
                return <GridRow key={GridRow.newRowId() + "-row"} rowContent={headerRowContent} isHeaderRow={true}/>
            } else {
                let entries = this.props.currentAnnualStatement.getMonthEntries(this.props.currentMonth);
                let rowContent = [date];
                categories.forEach(categoryName => {
                    rowContent.push([]);
                    entries.forEach(entry => {
                        if (entry.category === categoryName && entry.date.day === +i) {
                            rowContent[rowContent.length - 1].push(this.renderEntry(entry));
                        }
                    });                
                });
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
        if (options === null) {
            return null;
        }
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
        console.log("Changed: " + month);
        this.props.onChangeViewMonth(month);
    }

    getCurrentYear() {
        if (this.props.currentAnnualStatement !== null) {
            return this.props.currentAnnualStatement.year;
        }
        return "";
    }

    getCurrentMonth() {
        console.log("current month: " + this.props.currentMonth);
        if (this.props.availableMonths !== null) {
            let selectedMonth = this.props.availableMonths[0];
            this.props.availableMonths.forEach(month => {
                if (month === this.props.currentMonth) {
                    selectedMonth = this.props.currentMonth;
                    return;
                }
            });
            return selectedMonth;
        }
        return "";
    }

    render() {
        return (
            <div className="HistoryPage-body">
                <div className="HistoryPage-header-content">
                    <div className="HistoryPage-header-label">History</div>
                    <div className="HistoryPage-select-label">Year</div>
                    <select className="HistoryPage-header-select" value={this.getCurrentYear()} 
                        onChange={(e) => this.onChangeViewYear(e)}>
                        {this.renderSelectOption(this.props.availableYears)}
                    </select>
                    <div className="HistoryPage-select-label">Month</div>
                    <select className="HistoryPage-header-select" value={this.getCurrentMonth()}
                         onChange={(e) => this.onChangeViewMonth(e)}>
                        {this.renderSelectOption(this.props.availableMonths)}
                    </select>
                </div>
                <div className="HistoryPage-content" data-simplebar data-simplebar-auto-hide="false">
                    <div className="HistoryPage-grid">
                            {this.renderGrid(this.props.currentAnnualStatement)}
                    </div>
                </div>
            </div>
        )
    }


}

export default HistoryPage;