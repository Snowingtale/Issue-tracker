 import React, { useState } from "react";
  import "./AddIssue.css";

  class AddIssue extends React.Component{
    constructor(){
      super()
      this.state={
        description: "",
        assignTo:"",
        priority:"",
      }
  }

    handleDescriptionChange = (e) => {
      this.setState({ description: e.target.value })
    }
    handleAssignChange = (e) => {
      this.setState({ assignTo: e.target.value })
    }
    handlePriorityChange = (e) => {
      this.setState({ priority: e.target.value })
    }
    handleSubmit(e){
      e.preventDefault();
      this.props.onEvent(this.state)
      this.setState({ 
        assignTo: "",
        description:"",
        priority:"",
      })
    }
    render() {
      return (
            <div className="box">
            <div className="add-issue">
              <form onSubmit={ 
                (e)=>{this.handleSubmit(e)}
                } >
                <label>
                  Description
                  <input
                    id="description"
                    type="text"
                    placeholder="Description of Issue..."
                    value={this.state.description}
                    onChange={this.handleDescriptionChange }
                 />
                </label>
                <label>
                  Assign To
                  <select
                    onChange={this.handleAssignChange}
                    name="forDev"
                    id="forDev"
                    value={this.state.assignTo}
                  >
                    <option value="Select..">Select..</option>
                    <option value="Andrei">Andrei</option>
                    <option value="Robert">Robert</option>
                    <option value="Sara">Sara</option>
                    <option value="Horatiu">Horatiu</option>
                  </select>
                </label>
                <label>
                  Priority
                  <select
                    onChange={this.handlePriorityChange}
                    name="priority"
                    id="priority"
                    value={this.state.priority}
                  >  
                    <option value="Select..">Select..</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Extra-High">Extra-High</option>
                  </select>
                </label>
                <button
                  type="submit"
                >
                  Add
                </button>
              </form>
            </div>
            </div>
          );
        }
        

    }
  
 export default AddIssue;
