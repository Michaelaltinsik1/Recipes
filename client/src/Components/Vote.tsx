import Stars from "./Stars";

interface VoteType {
  isVoted: boolean;
  handleVote: Function;
}
const Vote = ({ isVoted, handleVote }: VoteType) => {
  if (!isVoted) {
    return (
      <article>
        <h2>How did you enjoy the recipe?</h2>
        <p>Click on a star to rate the recipe</p>
        <Stars handleVote={handleVote} starCount={5} page={"recipePage"} />
      </article>
    );
  } else {
    return (
      <article>
        <h2>Thank you for your vote!</h2>
      </article>
    );
  }
};

export default Vote;
