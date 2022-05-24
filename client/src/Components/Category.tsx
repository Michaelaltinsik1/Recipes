import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

interface StyledCategoryProps {
  category: string;
  categoryId: string | undefined;
}

const StyledLi = styled.li<StyledCategoryProps>`
  text-decoration: ${(props) =>
    props.category === props.categoryId ? "underline" : "none"};
`;

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
  const { categoryId } = useParams();
  return (
    <StyledLi
      categoryId={categoryId}
      category={category}
      onClick={(e) => navigate("/category/" + category)}
    >
      {category} ({findFrequencyCategory({ category, unfiltered })})
    </StyledLi>
  );
};

export default Category;
