import React from "react";

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <form className="new-task-input" onSubmit={this.props.handleNewTask}>
        <input type="text" placeholder="Add new task" name="todo" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewTask;
