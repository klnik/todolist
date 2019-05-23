import React, { Component } from "react";
import "./add-form.css";

export default class AddForm extends Component {
  onAddButtonPress() {
    console.log("click");
  }

  render() {
    return (
      <form className="form-inline addFormClass">
        <input
          placeholder="type here to add task"
          className="form-control mr-sm-2"
        />
        <button className="btn btn-primary " onClick={this.onAddButtonPress}>
          {" "}
          Add{" "}
        </button>
      </form>
    );
  }
}
