import { useNavigate } from "react-router-dom";

interface CategoryType {
  category: string;
  unfiltered: Array<string>;
}

function findFrequencyCategory({ category, unfiltered }: CategoryType) {
  let count = 0;
  unfiltered.forEach((element: string) => {
    if (element === category) {
      count++;
    }
  });
  return count;
}

const Category = ({ category, unfiltered }: CategoryType) => {
  let navigate = useNavigate();
  return (
    <li onClick={(e) => navigate("/category/" + category)}>
      {category} ({findFrequencyCategory({ category, unfiltered })})
    </li>
  );
};

export default Category;
