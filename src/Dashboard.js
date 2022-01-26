import React from "react";
import SummaryPage from "./SummaryPage";
import './Dashboard.css'
import AddPage from "./AddPage";


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: new SummaryPage(props),
        }
    }

    render() {
        return (
            <div className="Dashboard-body">
                <div className="Dashboard-header">
                <div className="Dashboard-header-label">MFlow</div>
                    <button className="Dashboard-nav-btn" onClick={() => {this.setState({ currentPage: new SummaryPage(this.props)});
                console.log(this.state.currentPage);}}>Summary Page</button>
                    <button className="Dashboard-nav-btn" onClick={() => {this.setState({ currentPage: new AddPage(this.props)});
                console.log(this.state.currentPage);}}>Add Page</button>
                </div>
                
                <div>
                    {this.state.currentPage.render()}
                </div>
            </div>
        );
    }

}

export default Dashboard;