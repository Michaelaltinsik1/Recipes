import star from "../images/star.svg";

interface starType {
  starNumber: number;
  handleVote?: Function;
  page?: string | null;
}

const Star = ({ starNumber, handleVote, page = null }: starType) => {
  const altText = "Give rating" + starNumber;
  if (page) {
    return (
      <button onClick={() => handleClick()} value={starNumber}>
        <img src={star} alt={altText}></img>
      </button>
    );
  } else {
    return <img src={star} alt={altText}></img>;
  }
  function handleClick() {
    if (handleVote) {
      handleVote(starNumber);
    }
  }
};

export default Star;
