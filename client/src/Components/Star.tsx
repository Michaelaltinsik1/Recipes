import star from "../images/star.svg";

interface starType {
  starNumber: number;
}

const Star = ({ starNumber }: starType) => {
  const altText = "Give rating" + starNumber;
  return (
    <button onClick={() => console.log(starNumber)} value={starNumber}>
      <img src={star} alt={altText}></img>
    </button>
  );
};

export default Star;
