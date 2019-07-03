import React, { Component } from "react";

export default class DeleteItem extends Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}
