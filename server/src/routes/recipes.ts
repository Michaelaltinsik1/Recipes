import express, { Request, Response } from "express";

const router = express.Router();

/*
 * Get information of all recipes or
 * by searchstring (query) if it exist
 */
router.get("/", async (req: express.Request, res: express.Response) => {
  const query = req.query;
  if (Object.keys(query).length > 0) {
    res.send(query);
  } else {
    res.send("get all recipes");
  }
});

/*
 * Get all information for a single recipe
 */
router.get(
  "/:recipeId",
  async (req: express.Request, res: express.Response) => {
    const params = req.params;
    res.send(params);
  }
);

export default router;

/*
 * Get all recipes filtered by a search string
 *    /recipes?search=abc
 */
// router.get("recipes", async (req: express.Request, res: express.Response) => {
//   const query = req.query;
//   res.send(query);
// });
