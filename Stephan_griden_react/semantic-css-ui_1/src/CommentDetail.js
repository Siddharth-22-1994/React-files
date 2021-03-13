import React from "react";
// import faker from "faker";

// const CommentDetail = ({ name, time, post }) => {
const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.post}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
