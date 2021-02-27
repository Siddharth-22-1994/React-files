import React, { useState, useEffect } from "react";
import axios from "axios";

function HookDataFetch11() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [fetchpost, setfetchpost] = useState(1);

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
  }, [fetchpost]);

  const handleFetch = () => {
    setfetchpost(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleFetch}>Click to fetch</button>
      <h3>{post.title}</h3>

      {/* <ul>
        {post.map((p) => (
          <li>{p.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default HookDataFetch11;
