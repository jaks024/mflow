import React from 'react';
import './AddPage.css'
import Entry from './Entry';
import Date from './Date';

class AddPage extends React.Component {

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

    constructor(props) {
        super(props);
        this.state = {
            idCount: 0,
            inputYear: 2022,
            inputMonth: "Jan",
            inputDay: 1,
            inputCategory: "",         // 1
            inputLocation: "",         // 2
            inputIncome: "0",           // 3
            inputExpense: "0",          // 4
            inputDescription: "",      // 5
            inputNewCategory: "",      // 6
        }
    }

    timeNow() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + " " + time;
    }

    onAddEntry = () => {
        let monthNumeric = 1;
        for (const month of this.monthsAndDays) {
            if (month.name === this.state.inputMonth) {
                monthNumeric = month.num;
                break;
            }
        }
        if (isNaN(this.state.inputIncome) || isNaN(this.state.inputExpense) ||
            this.state.inputIncome.trim().length === 0 || this.state.inputExpense.trim().length === 0 ||
            this.state.inputCategory.trim().length === 0 || this.state.inputLocation.trim().length === 0) {
            return;
        }
        this.props.onAddEntry(new Entry(
            this.state.idCount, 
            new Date(this.state.inputYear, monthNumeric, this.state.inputDay), 
            this.state.inputIncome, 
            this.state.inputExpense, 
            this.state.inputCategory.trim(), 
            this.state.inputLocation.trim(), 
            this.state.inputDescription.trim()));
        this.setState({idCount: this.state.idCount + 1});
    }

    onAddCategory = () => {
        if (this.state.inputNewCategory.length > 0) {
            this.props.onAddCategory(this.state.inputNewCategory);
        }
    }

    onClearForm = () => {
        this.setState({
            inputCategory: "",         
            inputLocation: "",         
            inputIncome: "0",           
            inputExpense: "0",          
            inputDescription: "",      
        });
    }

    onClearCateogryForm = () => {
        this.setState({
            inputNewCategory: ""
        });
    }

    updateInput(field, evt) {
        const val = evt.target.value;
        if (field === 1) 
            this.setState({inputCategory: val});
        else if (field === 2) 
            this.setState({inputLocation: val});
        else if (field === 3) 
            this.setState({inputIncome: val});
        else if (field === 4) 
            this.setState({inputExpense: val});
        else if (field === 5) 
            this.setState({inputDescription: val});
        else if (field === 6)
            this.setState({inputNewCategory: val});
    }

    renderOptions(options, keySuffix) {
        if (options === null) {
            return null;
        }
        return options.map((op) => {
            return <option key={op + keySuffix} value={op}>{op}</option>;
        });
    }

    renderYearOptions() {
        const years = []
        for (let i = 2021; i < 2030; i++) {
            years.push(i);
        }
        return this.renderOptions(years, "-add-page-year-option");
    }

    renderMonthOptions() {
        const months = [];
        this.monthsAndDays.forEach(month => {
            months.push(month.name);
        });
        return this.renderOptions(months, "-add-page-month-option");
    }

    renderDayOptions() {
        const days = [];
        for (const month of this.monthsAndDays) {
            if (month.name === this.state.inputMonth) {
                for (let i = 1; i <= month.days; i++) {
                    days.push(i);
                }
                break;
            }
        }
        return this.renderOptions(days, "-add-page-day-option");
    }

    onChangeInputYear = (e) => {
        const year = e.target.value;
        this.setState({inputYear: year});
    }

    onChangeInputMonth =(e) => {
        const month = e.target.value;
        console.log(month);
        this.setState({inputMonth: month});
    }

    onChangeInputDay =(e) => {
        const day = e.target.value;
        this.setState({inputDay: day});
    }
    

    render() {
        return (
            <div className="AddPage-body">
                <div className="AddPage-header-label">
                    Add Entry
                </div>
                <div className="AddPage-form">
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Date</div>
                        <div className='AddPage-date-block'>
                            <select className="AddPage-date-select" value={this.state.inputYear}
                                onChange={(e) => this.onChangeInputYear(e)}>
                                {this.renderYearOptions()}
                            </select>
                            <select className="AddPage-date-select" value={this.state.inputMonth}
                                onChange={(e) => this.onChangeInputMonth(e)}>
                                {this.renderMonthOptions()}
                            </select>
                            <select className="AddPage-date-select" value={this.state.inputDay}
                                onChange={(e) => this.onChangeInputDay(e)}>
                                {this.renderDayOptions()}
                            </select>
                        </div>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Category</div>
                        <input className="AddPage-field-input" inputMode="text"
                            value={this.state.inputCategory}
                            onChange={evt => this.updateInput(1, evt)}></input>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Location</div>
                        <input className="AddPage-field-input" inputMode="text"
                            value={this.state.inputLocation}
                            onChange={evt => this.updateInput(2, evt)}></input>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Income</div>
                        <input className="AddPage-field-input" inputMode="numeric"
                            value={this.state.inputIncome}
                            onChange={evt => this.updateInput(3, evt)}></input>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Expense</div>
                        <input className="AddPage-field-input" inputMode="numeric"
                            value={this.state.inputExpense}
                            onChange={evt => this.updateInput(4, evt)}></input>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Description</div>
                        <input className="AddPage-field-input" inputMode="text"
                            value={this.state.inputDescription}
                            onChange={evt => this.updateInput(5, evt)}></input>
                    </div>
                    <br/>
                    <div className="AddPage-field-block">
                        <button className="AddPage-form-btn" onClick={() => this.onAddEntry()}>Add</button>
                        <button className="AddPage-form-btn" onClick={() => this.onClearForm()}>Clear</button>
                    </div>
                </div>
                <br/>
                <div className="AddPage-header-label">
                    Add Category
                </div>
                <div className="AddPage-form">
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Category</div>
                        <input className="AddPage-field-input" inputMode="text" 
                            value={this.state.inputNewCategory}
                            onChange={evt => this.updateInput(6, evt)}></input>
                    </div>
                    <br/>
                    <div className="AddPage-field-block">
                        <button className="AddPage-form-btn" onClick={() => this.onAddCategory()}>Add</button>
                        <button className="AddPage-form-btn" onClick={() => this.onClearCateogryForm()}>Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPage;