import React from "react";
import "./CommentWrapper.css";

function CommentWrapper(props) {
  const classes = props.className + " wrapper"; 
  return <div className={classes}>{props.children}</div>;
}
export default CommentWrapper;

