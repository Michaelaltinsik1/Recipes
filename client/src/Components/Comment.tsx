import { CommentType } from "../types/CommentType";

const Comment = (props: { comment: CommentType }) => {
  let value = props.comment.createdAt?.toString().split("T");
  let date = null;
  if (value) {
    date = value[0];
  }
  if (date) {
    return (
      <article>
        <h3>{props.comment.name}</h3>
        <p>{props.comment.comment}</p>
        <p>{date}</p>
      </article>
    );
  } else {
    return <></>;
  }
};

export default Comment;
