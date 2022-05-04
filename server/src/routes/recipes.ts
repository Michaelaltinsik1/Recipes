import express, { Request, Response } from "express";

import { getRecipes, getRecipesByQuery, getRecipeById } from "../db/recipe";

const router = express.Router();

/*
 * Get information of all recipes or
 * by searchstring (query) if it exist
 */
router.get("/", async (req: express.Request, res: express.Response) => {
  const query = req.query;
  if (Object.keys(query).length > 0) {
    if (Object.keys(query).includes("search")) {
      const recipesByQuery = await getRecipesByQuery(query);
      res.json(recipesByQuery);
    } else {
      res.send("query not search");
    }
  } else {
    const recipes = await getRecipes();
    res.json(recipes);
  }
});

/*
 * Get all information for a single recipe
 */
router.get(
  "/:recipeId",
  async (req: express.Request, res: express.Response) => {
    const params = req.params;
    let id = params.recipeId;
    const recipeById = await getRecipeById(id);
    res.send(recipeById);
  }
);

export default router;
