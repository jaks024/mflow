import React from 'react';
import './AddPage.css'
import Entry from './Entry';
import Date from './Date';

class AddPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idCount: 0,
            inputDate: "2022/1/1",             // 0
            inputCategory: "abc",         // 1
            inputLocation: "soeb",         // 2
            inputIncome: "123",           // 3
            inputExpense: "423",          // 4
            inputDescription: "dsafsafsd",      // 5
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
        let dateParts = this.state.inputDate.split("/");
        console.log(dateParts);
        this.props.onAddEntry(new Entry(
            this.state.idCount, 
            new Date(dateParts[0], dateParts[1], dateParts[2]), 
            this.state.inputIncome, 
            this.state.inputExpense, 
            this.state.inputCategory, 
            this.state.inputLocation, 
            this.state.inputDescription));
        this.setState({idCount: this.state.idCount + 1});
        console.log(this.state.inputIncome);
    }

    onAddCategory = () => {
        if (this.state.inputNewCategory.length > 0) {
            this.props.onAddCategory(this.state.inputNewCategory);
        }
    }

    updateInput(field, evt) {
        const val = evt.target.value;
        if (field === 0) 
            this.setState({inputDate: val});
        else if (field === 1) 
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

    render() {
        return (
            <div className="AddPage-body">
                <div className="AddPage-header-label">
                    Add Entry
                </div>
                <div className="AddPage-form">
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Date</div>
                        <input className="AddPage-field-input" inputMode="text"
                            value={this.state.inputDate}
                            onChange={evt => this.updateInput(0, evt)}></input>
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
                        <button className="AddPage-form-btn">Clear</button>
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
                        <button className="AddPage-form-btn">Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPage;