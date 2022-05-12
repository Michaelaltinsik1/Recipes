import { CommentType } from "../types/CommentType";

const Comment = (props: { comment: CommentType }) => {
  return (
    <article>
      <h3>{props.comment.name}</h3>
      <p>{props.comment.comment}</p>
      <p>{props.comment.createdAt.toString()}</p>
    </article>
  );
};

export default Comment;
