import {
  fetchRecipesByQueryFromAPI,
  fetchRecipesFromAPI,
  fetchRecipesByCategoryFromAPI,
  fetchRecipesByCategoryAndQueryFromApi,
} from "../features/recipes/recipesSlice";

import { fetchCategories } from "../API/categoris";
import { CategoriesType } from "../types/RecipeType";
import SearchField from "../Components/SearchField";
import { useEffect, useState } from "react";
import CategoryList from "../Components/CategoryList";
import RecipesList from "../Components/RecipesList";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../App/hooks";

const HomePage = () => {
  let navigate = useNavigate();
  const [categories, setCategories] = useState<Set<string>>(new Set());
  const [unFilteredCategories, setUnFilteredCategories] = useState<string[]>(
    []
  );
  const [searchParams, setSearchParams] = useSearchParams();

  function updateSearchParams(data: string) {
    setSearchParams({ search: data });
  }
  let params = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const recipesByQuery = async () => {
      if (searchParams.get("search") && params.hasOwnProperty("categoryId")) {
        let queryString = searchParams.get("search");
        let category = params.categoryId;
        if (category && queryString) {
          dispatch(
            fetchRecipesByCategoryAndQueryFromApi({ category, queryString })
          );
        }
      } else if (searchParams.get("search")) {
        let queryString = searchParams.get("search");
        if (queryString) {
          dispatch(fetchRecipesByQueryFromAPI(queryString));
        }
      }
    };
    recipesByQuery();
  }, [searchParams, params, dispatch]);

  useEffect(() => {
    if (params.hasOwnProperty("categoryId") && !searchParams.get("search")) {
      let query = params.categoryId;
      if (query) {
        dispatch(fetchRecipesByCategoryFromAPI(query));
      }
    }
    getCategories();
  }, [dispatch, params, searchParams]);

  useEffect(() => {
    dispatch(fetchRecipesFromAPI());
  }, [dispatch]);

  const getCategories = async () => {
    const allCategories = await fetchCategories();
    const unFilteredCategories = getCategoriesUnFiltered(allCategories.data);
    setUnFilteredCategories(unFilteredCategories);
    const filteredCategories = filterRedundantCategories(allCategories.data);
    setCategories(filteredCategories);
  };

  function handleNavigation(id: string) {
    navigate(`/recipe/${id}`);
  }

  return (
    <div className="App">
      <RecipesList handleNavigation={handleNavigation} />
      <CategoryList
        categories={categories}
        unfilteredCategories={unFilteredCategories}
      />
      <SearchField updateSearchParams={updateSearchParams} />
    </div>
  );
};
export default HomePage;

function filterRedundantCategories(fetchedData: CategoriesType[]): Set<string> {
  let filteredCategories: Set<string> = new Set();
  for (let item of fetchedData) {
    for (let i = 0; i < item.categories.length; i++) {
      filteredCategories.add(item.categories[i]);
    }
  }
  return filteredCategories;
}
function getCategoriesUnFiltered(data: CategoriesType[]): string[] {
  const values: string[] = [];
  for (let item of data) {
    for (let i = 0; i < item.categories.length; i++) {
      values.push(item.categories[i]);
    }
  }
  return values;
}
