import Category from "./Category";

const CategoryList = ({ categories, unfilteredCategories }: any) => {
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
          {listOfCategories.map((element: any) => (
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

// return (
//   <ol>
//     {categories.map((singleCategory: any) => (
//       <Category category={singleCategory} />
//     ))}
//   </ol>
// );
