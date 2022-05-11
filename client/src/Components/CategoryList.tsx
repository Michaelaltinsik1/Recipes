import Category from "./Category";
interface CategoryListType {
  categories: Set<string>;
  unfilteredCategories: Array<string>;
}
const CategoryList = ({
  categories,
  unfilteredCategories,
}: CategoryListType) => {
  let listOfCategories = [];
  let iterator = categories.values();
  for (let i = 0; i < categories.size; i++) {
    listOfCategories.push(iterator.next().value);
  }
  if (listOfCategories.length > 0) {
    return (
      <>
        <h2>Categories</h2>
        <ol>
          {listOfCategories.map((element: string) => (
            <Category
              key={element}
              category={element}
              unfiltered={unfilteredCategories}
            />
          ))}
        </ol>
      </>
    );
  } else {
    return <p>No Categories found</p>;
  }
};

export default CategoryList;
