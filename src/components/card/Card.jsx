import React from "react";
import "./Card.css";

export const Card = (props) => {
  console.log(props);
  const bgStayle = {
    background: props.bgcolor,
  };
  return (
    <div className="Card">
      <div style={bgStayle} className="bgcolor"></div>
      <figure>
        <img className="user_img" src={props.profilePic} alt="userimg" />
      </figure>
      <div className="wrapper">
        <div className="name_and_id">
          <div className="username">{props.username}</div>
          <div className="userid">{props.id}</div>
        </div>
        <div className="about">about</div>
        <div className="user_info">{props.userInfo}</div>
        <div className="sites">
          <div>
            web:<a href={props.social}>{props.social}</a>
          </div>
          <div>
            twitter: <a href={props.social}>{props.social}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
