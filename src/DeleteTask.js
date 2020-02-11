import React from "react";

class DeleteTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
  }

  render() {
    return (
      <button
        key={this.props.id}
        type="submit"
        className="delete-button"
        onClick={this.props.handleDelete}
        id={this.props.id}
      >
        Delete
      </button>
    );
  }
}

export default DeleteTask;
