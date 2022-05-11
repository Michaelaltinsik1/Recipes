import Star from "./Star";
const STARCOUNT = 5;

const Stars = () => {
  let values = [];
  for (let i = 0; i < STARCOUNT; i++) {
    values.push(i + 1);
  }
  return (
    <div>
      {values.map((value: number) => (
        <Star key={value} starNumber={value} />
      ))}
    </div>
  );
};

export default Stars;
