import { useNavigate } from "react-router-dom";

// interface CategoryProps {
//   category: React.ReactNode;
// }

function findFrequencyCategory(category: any, unfiltered: any) {
  let count = 0;
  // console.log(unfiltered);
  unfiltered.forEach((element: any) => {
    if (element === category) {
      count++;
    }
  });
  return count;
}

const Category = ({ category, unfiltered }: any) => {
  //console.log("category: ", category);
  let navigate = useNavigate();
  return (
    // <li onClick={(e) => console.log(category)}>
    //   {category} ({findFrequencyCategory(category, unfiltered)})
    // </li>
    <li onClick={(e) => navigate("/category/" + category)}>
      {category} ({findFrequencyCategory(category, unfiltered)})
    </li>
  );
};

export default Category;
