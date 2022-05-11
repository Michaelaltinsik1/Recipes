import star from "../images/star.svg";

interface starType {
  starNumber: number;
  handleVote?: Function;
}

const Star = ({ starNumber, handleVote }: starType) => {
  const altText = "Give rating" + starNumber;
  return (
    <button onClick={() => handleClick()} value={starNumber}>
      <img src={star} alt={altText}></img>
    </button>
  );
  function handleClick() {
    if (handleVote) {
      handleVote(starNumber);
    }
  }
};

export default Star;
