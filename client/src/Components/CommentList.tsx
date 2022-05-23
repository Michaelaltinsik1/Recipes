import Comment from "./Comment";
import { CommentType } from "../types/CommentType";
import { useAppSelector } from "../App/hooks";
const CommentList = () => {
  const comments = useAppSelector<Array<CommentType> | []>(
    (state) => state.comments.comments
  );
  console.log("comments1: ", comments);
  return (
    <section>
      {comments.map((element: CommentType) => (
        <Comment key={element._id} comment={element} />
      ))}
    </section>
  );
};

export default CommentList;
