import React from "react";

class TodoTask extends React.Component {
  render() {
    return (
      <p
        style={{
          textDecoration:
            this.props.task.status === true ? "line-through" : "solid"
        }}
      >
        {this.props.task["todo"]}
      </p>
    );
  }
}

export default TodoTask;
