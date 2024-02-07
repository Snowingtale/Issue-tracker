import React from "react";

import "./CurrentIssue.css";

class CurrentIssue extends React.Component {
  constructor() {
    super();
  }
   handleDelete = (issue) =>{
    this.props.onDelete(issue);

  };
  render() {
    return (
      <div className="current-issues">
        {
          this.props.issues.map((issue) => 
            <div className="indv-issue">
              <button onClick={()=>this.handleDelete(issue)} className="close-issue">Close Isssue</button>
              <p>
                Assigned<span>{issue.assignTo}</span>
              </p>
              <p>
                Priority <span>{issue.priority}</span>
              </p>
              <p>Description</p>
              <p className="description-text">
                {issue.description}
              </p>
              <hr />
            </div>
          )
        }
      </div>
    );
  }
}

export default CurrentIssue;
