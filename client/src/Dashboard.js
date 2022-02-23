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
    ClickCount = 0;
    saveIntervalId = setInterval(() => {
        if (this.ClickCount > 0) {
            if (this.ClickCount === 1) {
                this.saveToDrive();
                console.log("Saved to drive");
            }
            --this.ClickCount;
        }
    }, 1000);

    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: false,
            userName: '',
            userEmail: '',
            isSaving: false,
            currentMonth: 1,
            currentYearIndex: 0,
            allAnnualStatements: [],
        }
    }
    
    incrementClickCount() {
        if (this.ClickCount < 2) {
            ++this.ClickCount;
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
        this.incrementClickCount();
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
        this.incrementClickCount();
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
        this.incrementClickCount();
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
        return years.sort();
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
            if (+allAnnualStatements[i].year === +year) {
                let firstAvailableMonth = -1;
                allAnnualStatements[i].monthlyStatements.forEach(monthStatement => {
                    if (!monthStatement.isStatementEmpty()) {
                        firstAvailableMonth = monthStatement.month;
                    }
                });

                this.setState({currentYearIndex: i, currentMonth: firstAvailableMonth});
                this.incrementClickCount();
                return;
            }
        }
    }

    handleChangeViewMonth = (month) => {
        this.setState({currentMonth: month});
        this.incrementClickCount();
    }

    successLoginGoogle = (response) => {
        this.setState({
            userEmail: response.profileObj.email,
            userName: response.profileObj.name,
            isSignedIn: true
        });

        fetch('/login', {
            method: 'GET',
            headers: {
                accessToken: response.tokenObj.access_token
            }
        })
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
        this.setState({isSaving: true});
        fetch(`/save`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            // add icon to show this in UI 
            console.log(data.message);
            console.log(`Save Status: ${data.status ? "Success" : "Failure"}`);
            this.setState({isSaving: false});
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
                                    <div className={`Dashboard-save-status-text ${!this.state.isSaving ?  "Dashboard-disabled" : ""}`}>
                                        Saving to Google Drive...
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