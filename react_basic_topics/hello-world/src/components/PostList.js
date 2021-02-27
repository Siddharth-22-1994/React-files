import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errmsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errmsg: "Error occured in retriving data" });
      });
  }

  render() {
    const { posts, errmsg } = this.state;
    return (
      <div>
        <h3>List of Posts</h3>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}

        {errmsg ? <div>{errmsg}</div> : null}
      </div>
    );
  }
}

export default PostList;

// Fake API: https://jsonplaceholder.typicode.com/
