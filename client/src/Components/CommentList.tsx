import Comment from "./Comment";
import { CommentType } from "../types/CommentType";
// export interface CommentType {
//   comments: { comment: string; name: string; createdAt: Date };
// }
const CommentList = (props: { comments: Array<CommentType> }) => {
  return (
    <section>
      {props.comments.map((element: CommentType) => (
        <Comment key={element._id} comment={element} />
      ))}
    </section>
  );
};

export default CommentList;
