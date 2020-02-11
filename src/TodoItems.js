import React from "react";
import CompletedCheckbox from "./CompletedCheckbox";
import TodoTask from "./TodoTask";
import DeleteTask from "./DeleteTask";

class TodoItems extends React.Component {
  render() {
    return (
      <div className="each-task">
        <CompletedCheckbox
          key={this.props.id}
          task={this.props.task}
          onChange={this.props.onChange}
        />
        <TodoTask key={this.props.id} task={this.props.task} />
        <DeleteTask
          key={this.props.id}
          id={this.props.task.id}
          handleDelete={this.props.handleDelete}
        />
      </div>
    );
  }
}

export default TodoItems;
