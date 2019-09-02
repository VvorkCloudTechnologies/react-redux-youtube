import React, { Component } from "react";
import Axios from "axios";

class Users extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    Axios.get("/api").then(res => {
      console.log(res);
      this.setState({
        data: [...res.data]
      });
    });
  }
  render() {
    console.log(this.state);
    return <div>This is users component</div>;
  }
}
export default Users;
