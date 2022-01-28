import React from 'react';
import './AddPage.css'
import Entry from './Entry';

class AddPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idCount: 0,
            newCategoryInputValue: "",
        }
    }

    timeNow() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + " " + time;
    }

    onAddEntry = () => {
        this.props.onAddEntry(new Entry(
            this.state.idCount, 
            this.timeNow(), 
            123, 
            456, 
            "Groceries", 
            "Sobeys", 
            "Bought groceries"));
        this.setState({idCount: this.state.idCount + 1});
    }

    onAddCategory = () => {
        if (this.state.newCategoryInputValue.length > 0) {
            this.props.onAddCategory(this.state.newCategoryInputValue);
        }
    }

    updateNewCategoryInputValue(evt) {
        const val = evt.target.value;
        this.setState({newCategoryInputValue: val});
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
                        <input className="AddPage-field-input" inputMode="text"></input>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Category</div>
                        <input className="AddPage-field-input" inputMode="text"></input>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Location</div>
                        <input className="AddPage-field-input" inputMode="text"></input>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Income</div>
                        <input className="AddPage-field-input" inputMode="numeric"></input>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Expense</div>
                        <input className="AddPage-field-input" inputMode="numeric"></input>
                    </div>
                    <div className="AddPage-field-block">
                        <div className="AddPage-field-label">Description</div>
                        <input className="AddPage-field-input" inputMode="text"></input>
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
                            value={this.state.newCategoryInputValue}
                            onChange={evt => this.updateNewCategoryInputValue(evt)}></input>
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