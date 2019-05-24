import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };

  onTermChange = e => {
    const { onSearchChange = () => {} } = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <form className="form-inline">
        <input
          value={this.state.term}
          placeholder="search"
          onChange={this.onTermChange}
          className="form-control mr-sm-2 serachPanel"
        />
      </form>
    );
  }
}
