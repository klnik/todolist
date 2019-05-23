import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  // на самом объекте, не на прототипе создается функция
  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onImportantButtonClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (important) classNames += " important";
    if (done) classNames += " done";
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          onClick={this.onImportantButtonClick}
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
