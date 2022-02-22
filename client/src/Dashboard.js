import React from "react";
import SummaryPage from "./SummaryPage";
import './Dashboard.css'
import AddPage from "./AddPage";
import HistoryPage from "./HistoryPage";
import AnnualStatement from "./AnnualStatement";
import 'simplebar'; 
import 'simplebar/dist/simplebar.css';
import { GoogleLogin, GoogleLogout } from "react-google-login";

class Dashboard extends React.Component {

    CLIENT_ID = '91993730445-4jjm5pf1kvja9m8r6b66uarvnqmdir1b.apps.googleusercontent.com';

    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: false,
            userName: '',
            userEmail: '',
            currentMonth: 1,
            currentYearIndex: 0,
            allAnnualStatements: [],
        }
    }
    
    getCurrentAnnualStatement() {
        if (this.state.allAnnualStatements.length === 0) {
            return null;
        }
        return this.state.allAnnualStatements[this.state.currentYearIndex];
    }

    setCurrentAnnualStatement(newStatement) {
        let newAllAnnualStatement = this.state.allAnnualStatements;
        newAllAnnualStatement[this.state.currentYearIndex] = newStatement;
        this.setState({allAnnualStatements: newAllAnnualStatement});
        this.saveToDrive();
    }

    addNewAnnualStatementWithEntry(entry) {
        const newAllAnnualStatements = this.state.allAnnualStatements;
        const newAnnualStatement = new AnnualStatement(entry.date.year);
        newAnnualStatement.addCategory(entry.category);
        newAnnualStatement.addEntryToMonthStatement(entry.date.month, entry);
        newAllAnnualStatements.push(newAnnualStatement);
        const newCurrentYearIndex = newAllAnnualStatements.length - 1;
        this.setState({allAnnualStatements: newAllAnnualStatements,
            currentYearIndex: newCurrentYearIndex,
            currentMonth: entry.date.month});
        this.saveToDrive();
    }

    handleNewEntry = (entry) => {
        if (this.getCurrentAnnualStatement() === null) {
            this.addNewAnnualStatementWithEntry(entry);
            return;
        }

        const newCurrentAnnualStatement = this.getCurrentAnnualStatement();
        let annualStatementIndex = this.state.currentYearIndex;
        if (entry.date.year !== newCurrentAnnualStatement.year) {
            let yearDNE = true;
            this.state.allAnnualStatements.forEach((statement, i) => {
                if (statement.year === entry.date.year) {
                    yearDNE = false;
                    annualStatementIndex = i;
                } 
            });
            if (yearDNE) {
                this.addNewAnnualStatementWithEntry(entry);
                return;
            } 
        } 
        const newAllAnnualStatements = this.state.allAnnualStatements;
        newAllAnnualStatements[annualStatementIndex].addCategory(entry.category);
        newAllAnnualStatements[annualStatementIndex].addEntryToMonthStatement(entry.date.month, entry);
        this.setState({
            allAnnualStatements: newAllAnnualStatements,
            currentYearIndex: annualStatementIndex,
            currentMonth: entry.date.month
        });
        this.saveToDrive();
    }

    handleNewCategory = (c) => {
        const newCurrentAnnualStatement = this.getCurrentAnnualStatement();
        if (newCurrentAnnualStatement.addCategory(c)) {
            this.setCurrentAnnualStatement(newCurrentAnnualStatement);
        }
    }

    getAvailableYears() {
        let years = [];
        this.state.allAnnualStatements.forEach(statement => {
            years.push(statement.year);
        });
        return years;
    }

    getAvailableMonths() {
        let month = [];
        const currentAnnualStatement = this.getCurrentAnnualStatement();
        if (currentAnnualStatement == null) {
            return null;
        }
        currentAnnualStatement.monthlyStatements.forEach(monthStatement => {
            if (!monthStatement.isStatementEmpty()) {
                month.push(monthStatement.month);
            }
        });
        return month;
    }

    handleChangeViewYear = (year) => {
        const allAnnualStatements = this.state.allAnnualStatements;
        for(let i = 0; i < allAnnualStatements.length; ++i) {
            if (allAnnualStatements[i].year === year) {
                let firstAvailableMonth = -1;
                allAnnualStatements[i].monthlyStatements.forEach(monthStatement => {
                    if (!monthStatement.isStatementEmpty()) {
                        firstAvailableMonth = monthStatement.month;
                    }
                });

                this.setState({currentYearIndex: i, currentMonth: firstAvailableMonth});
                this.saveToDrive();
                return;
            }
        }
    }

    handleChangeViewMonth = (month) => {
        this.setState({currentMonth: month});
        this.saveToDrive();
    }

    successLoginGoogle = (response) => {
        var url = `/login?access_token=${response.tokenObj.access_token}`;

        this.setState({
            userEmail: response.profileObj.email,
            userName: response.profileObj.name,
            isSignedIn: true
        });

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                this.getDataFromDrive();
            });
    }

    failureLoginGoogle = (response) => {
        console.log("failed to login to google");
        console.log(response);
    }

    successLogoutGoogle = () => {
        this.setState({
            isSignedIn: false,
            userName: '',
            userEmail: '',
            currentMonth: 1,
            currentYearIndex: 0,
            allAnnualStatements: [],
        });
        console.log("successfully logged out of google");
    }

    saveToDrive = () => {
        if (!this.state.isSignedIn) {
            return;
        }
        var data = JSON.stringify(this.state);
        fetch(`/save?data=${data}`)
            .then((res) => res.json())
            .then((data) => {
                // add icon to show this in UI 
                console.log(data.message);
                console.log(`Save Status: ${data.status ? "Success" : "Failure"}`);
            });
    }

    getDataFromDrive = () => {
        fetch(`/get`)
            .then((res) => res.json())
            .then((data) => {
                // save file not found in GDrive
                if (data.userData === null) {
                    // Make a new save file 
                    this.saveToDrive();
                    return;
                }

                const allAnnualStatements = [];
                data.userData.allAnnualStatements.forEach(statement => {
                    const newStatement = new AnnualStatement(statement.year);
                    newStatement.copy(statement);
                    allAnnualStatements.push(newStatement);
                });

                this.setState({
                    currentMonth: data.userData.currentMonth,
                    currentYearIndex: data.userData.currentYearIndex,
                    allAnnualStatements: allAnnualStatements
                });
                console.log(data.message); 
            });
    }

    render() {
        return (
            <div className="Dashboard-body">
                <div className="Dashboard-content">
                    <div className="Dashbaord-content-left" >
                        <div className="Dashboard-header">
                            <div className="Dashboard-header-label">MFlow</div>
                        </div>
                        <div className="Dashboard-content-left-scrollabe" data-simplebar>
                            <div className="Dashboard-account-block">
                                <div className={`Dashboard-user-info ${!this.state.isSignedIn ? "Dashboard-disabled" : ""}`}>
                                    <div className="Dashboard-user-info-texts">
                                        <div>{this.state.userName}</div>
                                        <div>{this.state.userEmail}</div>
                                    </div>
                                    <GoogleLogout 
                                        clientId={this.CLIENT_ID}
                                        buttonText="Log out"
                                        onLogoutSuccess={this.successLogoutGoogle}
                                        render={renderProps => (
                                            <button onClick={renderProps.onClick} 
                                            disabled={renderProps.disabled} 
                                            className="Dashboard-google-button">
                                                Log out
                                                </button>
                                          )}/>
                                </div>
                                <div className={`Dashboard-google-login-wrapper ${this.state.isSignedIn ? "Dashboard-disabled" : ""}`}>
                                    <GoogleLogin 
                                        clientId={this.CLIENT_ID}
                                        onSuccess={this.successLoginGoogle}
                                        onFailure={this.failureLoginGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        scope={'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata'}
                                        isSignedIn={true}
                                        render={renderProps => (
                                            <button onClick={renderProps.onClick} 
                                            disabled={renderProps.disabled} 
                                            className="Dashboard-google-button">
                                                Log in with Google to save your data!
                                            </button>
                                          )}/>
                                </div>
                            </div>
                            <SummaryPage currentAnnualStatement={this.getCurrentAnnualStatement()}
                                        currentMonth={this.state.currentMonth} />
                            <br/>
                            <AddPage currentAnnualStatement={this.getCurrentAnnualStatement()} 
                                    onAddEntry={this.handleNewEntry}
                                    onAddCategory={this.handleNewCategory}/>
                        </div>

                    </div>
                    <div className="Dashboard-content-right">
                       <HistoryPage currentAnnualStatement={this.getCurrentAnnualStatement()} 
                                    currentMonth={this.state.currentMonth}
                                    onChangeViewYear={this.handleChangeViewYear}
                                    onChangeViewMonth={this.handleChangeViewMonth}
                                    availableYears={this.getAvailableYears()}
                                    availableMonths={this.getAvailableMonths()}/>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Dashboard;