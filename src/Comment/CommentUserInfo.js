import "./CommentUserInfo.css";

function CommentUserInfo(props) {
  return (
    <div className="UserInfo">
      <img src={props.avatarUrl} alt="img" />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
}

export default CommentUserInfo;
