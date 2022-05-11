// import { CommentType } from "../types/CommentType";

export interface CommentType {
  comment: string;
  name: string;
  createdAt: Date;
}
const Comment = ({ comment }: any) => {
  console.log(comment);
  return (
    // <></>
    <article>
      <h3>{comment.name}</h3>
      <p>{comment.comment}</p>
      <p>{comment.createdAt}</p>
    </article>
  );
};

export default Comment;
