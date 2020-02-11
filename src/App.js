import React from "react";
import "./styles.css";
import NewTask from "./NewTask";
import TodoItems from "./TodoItems";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, todo: "display tasks", status: true },
        { id: 2, todo: "checkbox function", status: true },
        { id: 3, todo: "add new task function", status: false }
      ]
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleOnChange(id) {
    let index;
    for (let i = 0; i < this.state.items.length; i++) {
      if (Number(id.target.id) === this.state.items[i]["id"]) {
        index = i;
        break;
      }
    }
    console.log(index);
    let tasks = [...this.state.items];
    let task = { ...tasks[index] };
    console.log(task);
    task.status = !this.state.items[index]["status"];
    tasks[index] = task;
    this.setState({ items: tasks });
    console.log(this.state.items);
  }

  handleDelete(id) {
    id.persist();
    console.log("delete button working", id.target.id);
    let filteredArray = this.state.items.filter(
      item => item["id"] !== Number(id.target.id)
    );
    this.setState({ items: filteredArray });
    console.log(filteredArray);
  }

  handleNewTask(event) {
    event.preventDefault();
    // let {items} = this.state
    let addTask = event.target.todo.value;
    console.log(this.NewTaskInput);

    this.setState({
      items: [
        ...this.state.items,
        {
          id: this.state.items[this.state.items.length - 1]["id"] + 1,
          todo: addTask,
          status: false
        }
      ]
    });
    // this.setState({todo:})
    console.log("new task can be added", this.state.items);
    event.target.todo.value = "";
  }

  render() {
    return (
      <div className="App">
        <NewTask handleNewTask={this.handleNewTask} />
        {/* <p>{this.state.items[0]['todo']}</p> */}
        {this.state.items.map(eachitem => (
          <TodoItems
            key={eachitem.id}
            task={eachitem}
            onChange={this.handleOnChange}
            handleDelete={this.handleDelete}
          />
        ))}
        {/* <TodoItems key={this.state.items.id} task={this.state.items}/> */}
      </div>
    );
  }
}

export default App;
