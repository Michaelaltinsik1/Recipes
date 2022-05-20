import recipesRouter from "./routes/recipes";
import categoriesRouter from "./routes/categories";

import express, { Request, Response } from "express";
import { connect } from "mongoose";

const url = `mongodb+srv://Michael1994:Kb7lZbpMrohh8F09@cluster0.v0e70.mongodb.net/RECIPESAPP?retryWrites=true&w=majority`;

connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

const app = express();
const port = 4000;
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

//mongodb+srv://Michael1994:<password>@cluster0.ffald.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
