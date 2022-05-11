import Star from "./Star";
const STARCOUNT = 5;
interface starsType {
  handleVote?: Function;
}

const Stars = ({ handleVote }: starsType) => {
  let values = [];
  for (let i = 0; i < STARCOUNT; i++) {
    values.push(i + 1);
  }
  return (
    <div>
      {values.map((value: number) => (
        <Star key={value} starNumber={value} handleVote={handleVote} />
      ))}
    </div>
  );
};

export default Stars;
