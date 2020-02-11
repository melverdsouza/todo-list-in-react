import React from "react";

class CompletedCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
  }
  render() {
    return (
      <input
        type="checkbox"
        className="checkbox"
        checked={this.props.task.status}
        id={this.props.task.id}
        onChange={this.props.onChange}
      />
    );
  }
}

export default CompletedCheckbox;
