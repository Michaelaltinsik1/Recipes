import recipesRouter from "./routes/recipes";
import categoriesRouter from "./routes/categories";

import express, { Request, Response } from "express";

const app = express();
const port = 3000;
app.use(express.json());

//Routers
app.use("/recipes", recipesRouter);
app.use("/categories", categoriesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
