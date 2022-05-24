import { useState } from "react";
import { useAppSelector } from "../App/hooks";
import styled from "styled-components";
interface CommentFormType {
  handleCommentSubmit: Function;
}

interface StyledErrorProps {
  error: boolean;
}

const StyledInput = styled.input<StyledErrorProps>`
  border: ${(props) => (props.error ? "2px solid red" : "2px solid black")};
  background-color: ${(props) => (props.error ? "#fb9999" : "#fff")};
  ::placeholder {
    color: #433b3b;
  }
`;
const StyledTextArea = styled.textarea<StyledErrorProps>`
  border: ${(props) => (props.error ? "2px solid red" : "2px solid black")};
  background-color: ${(props) => (props.error ? "#fb9999" : "#fff")};
  ::placeholder {
    color: #433b3b;
  }
`;
const StyledParagraph = styled.p<StyledErrorProps>`
  color: ${(props) => (props.error ? "#ff0000" : "#050505")};
`;
const CommentForm = ({ handleCommentSubmit }: CommentFormType) => {
  const buttonState = useAppSelector((state) => state.comments.isFormSent);
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  if (!buttonState) {
    return (
      <>
        <form>
          <StyledTextArea
            error={error}
            name=""
            id=""
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></StyledTextArea>

          <StyledInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={error}
          />
          <button
            disabled={buttonState}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            Send
          </button>
        </form>
        {error && (
          <StyledParagraph error={error}>
            Invalid form, try again!
          </StyledParagraph>
        )}
      </>
    );
  } else {
    return <h3>Thank you for the comment</h3>;
  }

  function handleClick() {
    if (name.length > 0 && comment.length > 0) {
      handleCommentSubmit(comment, name);
      setName("");
      setComment("");
    } else {
      setError((error) => (error = true));
    }
  }
};

export default CommentForm;
