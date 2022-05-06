import {
  fetchRecipes,
  fetchRecipesById,
  fetchRecipesByQuery,
} from "../API/recipes";

import {
  fetchCategories,
  fetchRecipesByCategory,
  fetchRecipesByCategoryAndQuery,
} from "../API/categoris";

import SearchField from "../Components/SearchField";
import { useEffect, useState } from "react";
import CategoryList from "../Components/CategoryList";
import RecipesList from "../Components/RecipesList";
import { Outlet, useParams, useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [categories, setCategories] = useState<Set<string>>(new Set());
  const [unFilteredCategories, setUnFilteredCategories] = useState<string[]>(
    []
  );
  const [searchParams, setSearchParams] = useSearchParams();

  function updateSearchParams(data: any) {
    setSearchParams({ search: data });
  }
  const [recipesState, setRecipes] = useState([]);
  let params = useParams();

  useEffect(() => {
    const recipesByQuery = async () => {
      if (searchParams.get("search") && params.hasOwnProperty("categoryId")) {
        let queryString = searchParams.get("search");
        let category = params.categoryId;
        if (category && queryString) {
          const recipes = await fetchRecipesByCategoryAndQuery(
            category,
            queryString
          );
          setRecipes(recipes.data);
        }
      } else if (searchParams.get("search")) {
        let queryString = searchParams.get("search");
        if (queryString) {
          const recipes = await fetchRecipesByQuery(queryString);
          setRecipes(recipes.data);
        }
      }
    };
    recipesByQuery();
  }, [searchParams, params]);

  useEffect(() => {
    if (params.hasOwnProperty("categoryId") && !searchParams.get("search")) {
      let query = params.categoryId;
      getRecipiesByCategory(query);
    } else if (!searchParams.get("search")) {
      getCategories();
    }
  }, [params, searchParams]);

  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await fetchRecipes();
      setRecipes(recipes.data);
    };
    getRecipes();
  }, []);

  const getRecipiesByCategory = async (query: any) => {
    const categoriesByQuery = await fetchRecipesByCategory(query);
    setRecipes(categoriesByQuery.data);
  };

  const getCategories = async () => {
    const allCategories = await fetchCategories();
    const unFilteredCategories = getCategoriesUnFiltered(allCategories.data);
    setUnFilteredCategories(unFilteredCategories);
    const filteredCategories = filterRedundantCategories(allCategories.data);
    setCategories(filteredCategories);
  };

  return (
    <div className="App">
      {recipesState && <RecipesList recipes={recipesState} />}
      <CategoryList
        categories={categories}
        unfilteredCategories={unFilteredCategories}
      />
      <SearchField updateSearchParams={updateSearchParams} />
      {/* <Outlet /> */}
    </div>
  );
};
export default HomePage;

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
