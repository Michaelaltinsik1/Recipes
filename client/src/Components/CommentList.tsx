import Comment from "./Comment";
export interface CommentType {
  comments: { comment: string; name: string; createdAt: Date };
}
const CommentList = ({ comments }: any) => {
  console.log("Comments: ", comments);
  console.log("typeof: ", typeof comments);
  return (
    <section>
      {comments.map((comment: any) => (
        <Comment comment={comment} />
      ))}
    </section>
  );
};

export default CommentList;
