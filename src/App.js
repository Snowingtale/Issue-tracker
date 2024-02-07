import React, { useState } from "react";
import AddIssue from "./components/AddIssue/AddIsssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      addIssue: false,
    };
  }
  showAddIssue() {
    this.setState({
      addIssue: true,
    })
  }

  showCurrentIssue() {
    this.setState({
      addIssue: false,
    })
  }
  addIssueEvent = (data) => {
    this.setState({
      issues: [...this.state.issues, data],
    }) 
  } 
    deleteIssue = (issue) =>{
      const updatedIssues = this.state.issues.filter((i)=>i !==issue);
      this.setState({
        issues:updatedIssues,
      });
    
  };
  render() {
    return (
      <div className="App">
        <h1>Issue Tracker</h1>
        <div className="grey-card-container">
          {this.state.addIssue ? (
            <AddIssue onEvent={this.addIssueEvent} />
          ) : (
            <CurrentIssue issues={this.state.issues}  onDelete={this.deleteIssue}/>
          )}
        </div>
        <div className="view-selection-div">
          <button className="view-button" onClick={() => this.showCurrentIssue()}>
            Current Issues
          </button>
          <button
            className="view-button active-button"
            onClick={() => this.showAddIssue()}
          >
            Add Issue
          </button>
        </div>
      </div>
    );
  }
}
export default App;
