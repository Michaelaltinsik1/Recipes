import Stars from "./Stars";

interface VoteType {
  isVoted: boolean;
}
const Vote = ({ isVoted }: VoteType) => {
  if (!isVoted) {
    return (
      <article>
        <h2>How did you enjoy the recipe?</h2>
        <p>Click on a star to rate the recipe</p>
        <Stars />
      </article>
    );
  } else {
    return <h1>Nothing</h1>;
  }
};

export default Vote;
