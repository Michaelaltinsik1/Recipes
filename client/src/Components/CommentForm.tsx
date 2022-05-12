import { useState } from "react";

interface CommentFormType {
  handleCommentSubmit: Function;
}

const CommentForm = ({ handleCommentSubmit }: CommentFormType) => {
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  return (
    <form>
      <textarea
        name=""
        id=""
        placeholder="Enter your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        Send
      </button>
    </form>
  );
  function handleClick() {
    console.log("submited");
    handleCommentSubmit(comment, name);
    setName("");
    setComment("");
  }
};

export default CommentForm;
