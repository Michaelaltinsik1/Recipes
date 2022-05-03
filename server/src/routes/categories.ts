import express from "express";

const router = express.Router();

/*
 * Get all categories
 */
router.get("/", async (req: express.Request, res: express.Response) => {
  res.send("get all categories");
});

/*
 * Get recepies for a specific category or filtered
 * by a searchstring if it exists (query)
 *    /categories/:categoryName/recipes
 */
router.get(
  "/:categoryName/recipes",
  (req: express.Request, res: express.Response) => {
    const params = req.params;
    const query = req.query;
    if (Object.keys(query).length > 0) {
      res.send(query);
    } else {
      res.send(params);
    }
  }
);

export default router;

/*
 * Get all recipes in a category filtered by a search string
 *    /categories/:categoryName/recipes?search=abc
 */
// router.get(
//   "/:categoryName/recipes",
//   (req: express.Request, res: express.Response) => {
//     const query = req.query;
//     res.send(query);
//   }
// );
