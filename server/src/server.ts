import recipesRouter from "./routes/recipes";
import categoriesRouter from "./routes/categories";

import express, { Request, Response } from "express";
import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGOCONNECTIONSTRING;

connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

const app = express();
const port = process.env.PORT || 4000;
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
