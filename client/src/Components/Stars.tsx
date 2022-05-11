import Star from "./Star";

interface starsType {
  handleVote?: Function;
  starCount: number;
  page?: string | null;
}

const Stars = ({ handleVote, starCount, page = null }: starsType) => {
  let values = [];
  for (let i = 0; i < starCount; i++) {
    values.push(i + 1);
  }
  return (
    <div>
      {values.map((value: number) => (
        <Star
          key={value}
          starNumber={value}
          handleVote={handleVote}
          page={page}
        />
      ))}
    </div>
  );
};

export default Stars;
