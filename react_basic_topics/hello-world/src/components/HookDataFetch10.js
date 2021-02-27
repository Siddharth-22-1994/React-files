// To get an individual post from API
import React, { useState, useEffect } from "react";
import axios from "axios";

function HookDataFetch10() {
  const [post, setPost] = useState([]);
  const [id, getId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => getId(e.target.value)} />
      <h3>{post.title}</h3>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default HookDataFetch10;
