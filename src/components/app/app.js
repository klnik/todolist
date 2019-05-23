import React, { Component } from "react";
import AppHeader from "../../components/app-header";
import SearchPanel from "../../components/search-panel";
import TodoList from "../../components/todolist";
import AddForm from "../../components/add-form";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink coffee", important: false, id: 0 },
      { label: "Build app", important: true, id: 1 },
      { label: "Have a lunch", important: true, id: 2 }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newTodoData
      };
    });
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <SearchPanel />
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <AddForm />
      </div>
    );
  }
}
