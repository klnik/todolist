import React, { Component } from "react";
import AppHeader from "../../components/app-header";
import SearchPanel from "../../components/search-panel";
import TodoList from "../../components/todolist";
import AddForm from "../../components/add-form";
import ItemStatusFilter from "../item-status-filter";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createNewElement("Drink coffee"),
      this.createNewElement("Build app"),
      this.createNewElement("Drink coffee")
    ],
    search: "",
    filter: "all"
  };

  createNewElement(label) {
    return { label, important: false, id: this.maxId++, done: false };
  }

  getIndex(arr, id) {
    return arr.findIndex(el => el.id === id);
  }

  toggleProperty = (arr, id, prop) => {
    const newArr = [...arr];
    newArr[id][prop] = !newArr[id][prop];
    return newArr;
  };

  onToggleImortant = id => {
    this.setState(({ todoData }) => {
      const idx = this.getIndex(todoData, id);
      return {
        todoData: this.toggleProperty(todoData, idx, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const idx = this.getIndex(todoData, id);
      return {
        todoData: this.toggleProperty(todoData, idx, "done")
      };
    });
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

  onSubmitForm = label => {
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, this.createNewElement(label)];

      return {
        todoData: newTodoData
      };
    });
  };

  onSearchChange = search => {
    this.setState({ search });
  };

  search(arr, search) {
    if (search.length) {
      return arr.filter(el => el.label.includes(search));
    } else {
      return arr;
    }
  }

  filter(arr, filter) {
    switch (filter) {
      case "done":
        return arr.filter(el => el.done);
        break;
      case "active":
        return arr.filter(el => !el.done);
        break;
      default:
        return arr;
    }
  }

  onFilterChange = filter => {
    this.setState({
      filter
    });
  };

  render() {
    const { todoData, search, filter } = this.state;

    let visibleItems = this.search(todoData, search);
    visibleItems = this.filter(visibleItems, filter);

    const done = todoData.filter(el => {
      return el.done;
    }).length;

    const todo = todoData.filter(el => {
      return !el.done;
    }).length;

    return (
      <div className="App">
        <AppHeader toDo={todo} done={done} />
        <SearchPanel onSearchChange={this.onSearchChange} />
        <ItemStatusFilter
          onFilterChange={this.onFilterChange}
          filter={filter}
        />
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImortant}
          onToggleDone={this.onToggleDone}
        />
        <AddForm onSubmitForm={this.onSubmitForm} />
      </div>
    );
  }
}
