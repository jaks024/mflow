import React from 'react';

class AddPage extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <span>Date</span>
                    <input></input>
                </div>
                <div>
                    <span>Category</span>
                    <input></input>
                </div>
                <div>
                    <span>Location</span>
                    <input></input>
                </div>
                <div>
                    <span>Income</span>
                    <input></input>
                </div>
                <div>
                    <span>Expense</span>
                    <input></input>
                </div>
                <div>
                    <span>Description</span>
                    <input></input>
                </div>
                <button>Add</button>
                <button>Clear</button>
            </div>
        );
    }
}

export default AddPage;