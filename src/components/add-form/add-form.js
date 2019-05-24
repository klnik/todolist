import React, { Component } from "react";
import "./add-form.css";

export default class AddForm extends Component {
  state = {
    label: ""
  };

  labelChanged = text => {
    this.setState({
      label: text.target.value
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: "" });
    const cb = this.props.onSubmitForm || (() => {});
    cb(label);
  };

  render() {
    return (
      <form className="form-inline addFormClass" onSubmit={this.onSubmitForm}>
        <input
          value={this.state.label}
          onChange={this.labelChanged}
          placeholder="what needs to be done"
          className="form-control mr-sm-2"
        />
        <button className="btn btn-primary " type="submit">
          Add
        </button>
      </form>
    );
  }
}
