import React from "react";
import './HistoryPage.css'
import 'simplebar'; 
import 'simplebar/dist/simplebar.css';
import GridRow from "./GridRow";

class HistoryPage extends React.Component {

    monthsAndDays = [
        {name: "Jan", num: 1, days: 31},
        {name: "Feb", num: 2, days: 29},
        {name: "Mar", num: 3, days: 31},
        {name: "Apr", num: 4, days: 30},
        {name: "May", num: 5, days: 31},
        {name: "Jun", num: 6, days: 30},
        {name: "Jul", num: 7, days: 31},
        {name: "Aug", num: 8, days: 31},
        {name: "Sep", num: 9, days: 30},
        {name: "Oct", num: 10, days: 31},
        {name: "Nov", num: 11, days: 30},
        {name: "Dec", num: 12, days: 31}
    ];

    renderGrid(annualStatement) {
        if (annualStatement === null) {
            return;
        }
        const categories = annualStatement.categories;
        const rows = [["Dates"]];
        for (const month of this.monthsAndDays) {
            if (+month.num === +this.props.currentMonth) {
                for (let i = 0; i < month.days; i++) {
                    rows.push([`${month.name} ${(i + 1)}, ${this.props.currentAnnualStatement.year}`]);
                }
                break;
            }
        }

        return rows.map((date, i) => {
            if (date[0] === "Dates") {
                let headerRowContent = [date];
                categories.forEach(categoryName => {
                    headerRowContent.push([this.renderHeader(categoryName)]);
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

    renderHeader(text) {
        return ( 
            <div key={`Grid-header-${text}`} className="HistoryPage-entry">
                <div className="History-page-entry-content">
                    <div className="HistoryPage-entry-delete-btn" onClick={() => this.props.onDeleteCategory(text)}>&#215;</div>
                    <div className="HistoryPage-entry-main">
                        {text}
                    </div>
                </div>
            </div>
        );
    }

    renderEntry(entry) {
        return (
            <div key={entry.id} className="HistoryPage-entry">
                <div className="History-page-entry-content">
                    <div className="HistoryPage-entry-delete-btn" onClick={() => this.props.onDeleteEntry(entry.id)}>&#215;</div>
                    <div className="HistoryPage-entry-main">
                        <div>{entry.location}</div>
                        <div><span className="income-indicator">&#9650;</span>${entry.income}</div>
                        <div><span className="expense-indicator">&#9660;</span>${entry.expense}</div>
                    </div>
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
            return <option key={op + "-history-view-option"} value={op}>{op}</option>;
        });
    }

    onChangeViewYear = (e) => {
        const year = e.target.value;
        this.props.onChangeViewYear(year);
    }

    onChangeViewMonth =(e) => {
        const month = e.target.value;
        for (const m of this.monthsAndDays) {
            if (m.name === month) {
                this.props.onChangeViewMonth(m.num);
                break;
            }
        }
    }

    getCurrentYear() {
        if (this.props.currentAnnualStatement !== null) {
            return this.props.currentAnnualStatement.year;
        }
        return "";
    }

    getCurrentMonth() {
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
    


    numericMonthToNamed(months) {
        if (months === null) {
            return null;
        }
        const namedMonths = [];
        months.forEach(m => {
            namedMonths.push(this.monthsAndDays[m - 1].name);
        });
        return namedMonths;
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
                    <select className="HistoryPage-header-select" value={this.monthsAndDays[this.props.currentMonth - 1].name}
                         onChange={(e) => this.onChangeViewMonth(e)}>
                        {this.renderSelectOption(this.numericMonthToNamed(this.props.availableMonths))}
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