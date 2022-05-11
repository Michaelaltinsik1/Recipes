import express from "express";

import {
  getRecipes,
  getRecipesByQuery,
  getRecipeById,
  postRecipeById,
  getCommentsById,
  postCommentsById,
} from "../db/recipe";

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
    console.log(new Date());
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

router.post(
  "/:recipeId/rating",
  async (req: express.Request, rest: express.Response) => {
    if (
      req.body.hasOwnProperty("newRating") &&
      req.params.hasOwnProperty("recipeId")
    ) {
      await postRecipeById(req.body.newRating, req.params.recipeId);
    }
  }
);

router.get(
  "/:recipeId/comments",
  async (req: express.Request, res: express.Response) => {
    const params = req.params;
    let id = params.recipeId;
    const commentById = await getCommentsById(id);
    res.send(commentById);
  }
);

router.post(
  "/:recipeId/comments",
  async (req: express.Request, res: express.Response) => {
    console.log("post a comment");
    if (req.params.hasOwnProperty("recipeId")) {
      await postCommentsById(req.params.recipeId, req.body);
    }
  }
);

export default router;
