import React from 'react';
import './AddPage.css'
import Entry from './Entry';

class AddPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idCount: 0,
        }
    }

    timeNow() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + " " + time;
    }

    onAdd = () => {
        this.props.onAdd(new Entry(
            this.state.idCount, 
            this.timeNow(), 
            123, 
            456, 
            "Groceries", 
            "Sobeys", 
            "Bought groceries"));
        this.setState({idCount: this.state.idCount + 1});
    }

    render() {
        return (
            <div className="AddPage">
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
                        <button className="AddPage-form-btn" onClick={() => this.onAdd()}>Add</button>
                        <button className="AddPage-form-btn">Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPage;