import "./App.css";
import {
  fetchRecipes,
  fetchRecipesById,
  fetchRecipesByQuery,
} from "./API/recipes";

import {
  fetchCategories,
  fetchRecipesByCategory,
  fetchRecipesByCategoryAndQuery,
} from "./API/categoris";

import { useEffect, useState } from "react";
import CategoryList from "./Components/CategoryList";
import RecipesList from "./Components/RecipesList";
function App() {
  const [categories, setCategories] = useState<Set<string>>(new Set());
  const [unFilteredCategories, setUnFilteredCategories] = useState<string[]>(
    []
  );
  const [recipesState, setRecipes] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await fetchRecipes();
      setRecipes(recipes.data);
    };
    getRecipes();
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      const allCategories = await fetchCategories();
      const unFilteredCategories = getCategoriesUnFiltered(allCategories.data);
      // console.log(unFilteredCategories);
      setUnFilteredCategories(unFilteredCategories);
      const filteredCategories = filterRedundantCategories(allCategories.data);
      setCategories(filteredCategories);
    };
    getCategories();
  }, []);
  return (
    <div className="App">
      <h1>Amazing</h1>
      {/* {recipesState && <RecipesList recipes={recipesState} />} */}
      <CategoryList
        categories={categories}
        unfilteredCategories={unFilteredCategories}
      />
    </div>
  );
}

export default App;

function filterRedundantCategories(fetchedData: any): Set<string> {
  let filteredCategories: Set<string> = new Set();
  for (let item of fetchedData) {
    for (let i = 0; i < item.categories.length; i++) {
      filteredCategories.add(item.categories[i]);
    }
  }
  return filteredCategories;
}
function getCategoriesUnFiltered(data: any): string[] {
  const values: string[] = [];
  for (let item of data) {
    for (let i = 0; i < item.categories.length; i++) {
      values.push(item.categories[i]);
    }
  }
  return values;
}
// useEffect(() => {
//   const getRecipes = async () => {
//     const recipes = await fetchRecipes();
//     console.log(recipes.data);
//   };
//   getRecipes();

// }, []);
