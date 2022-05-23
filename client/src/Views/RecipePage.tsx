import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postRating, fetchCommentsById, postComments } from "../API/recipes";
import Recipe from "../Components/Recipe";
import IngredientsList from "../Components/IngredientsList";
import InstructionsList from "../Components/InstructionsList";
import { RecipeType } from "../types/RecipeType";
import Vote from "../Components/Vote";
import { CommentType, NewCommentType } from "../types/CommentType";
import CommentList from "../Components/CommentList";
import CommentForm from "../Components/CommentForm";

import { useAppDispatch, useAppSelector } from "../App/hooks";
import { fetchRecipeByIdFromAPI } from "../features/recipes/recipesSlice";

const Recipepage = () => {
  const params = useParams();
  //const [recipe, setRecipe] = useState<RecipeType>();
  const [isRated, setRatedState] = useState<boolean>(false);
  const [currVote, setVote] = useState<number>(-1);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState<NewCommentType>({
    comment: "",
    name: "",
  });
  // const [comments, setComments] = useState<any>([]);
  /**
   * Gets recipe by id from database
   */
  const dispatch = useAppDispatch();
  const recipe = useAppSelector<RecipeType | null>(
    (state) => state.recipes.singleRecipe
  );
  console.log(recipe);
  useEffect(() => {
    //const getRecipeById = async () => {
    if (params.recipeId) {
      let id: string = params.recipeId;
      //let recipeById = await fetchRecipesById(id);
      dispatch(fetchRecipeByIdFromAPI(id));
      // await postRating(id, 8);
      //setRecipe(recipeById.data);
    }
    //};
    // getRecipeById();
  }, [dispatch, params]);

  /**
   * Handle post rating communication with database
   */
  useEffect(() => {
    if (currVote > 0) {
      const postRecipeById = async () => {
        if (params.recipeId) {
          await postRating(params.recipeId, currVote);
        }
      };
      postRecipeById();
      // setVote(-1);
    }
  }, [currVote, params]);

  /**
   * Handle comments communication with database
   */
  useEffect(() => {
    const handleComments = async () => {
      // if (comments.length === 0) {

      if (
        params.recipeId &&
        newComment.name !== "" &&
        newComment.comment !== ""
      ) {
        const commentToPost: CommentType = {
          comment: newComment.comment,
          name: newComment.name,
          createdAt: new Date(),
        };
        console.log("test");
        await postComments(params.recipeId, commentToPost);
        const getCommentsById = await fetchCommentsById(params.recipeId);
        setComments(getCommentsById.data.comments);
      } else {
        if (params.recipeId) {
          const getCommentsById = await fetchCommentsById(params.recipeId);
          setComments(getCommentsById.data.comments);
        }
      }
    };
    handleComments();
  }, [newComment.comment, newComment.name, params.recipeId]);

  function handleVote(value: number) {
    setVote(value);
    setRatedState(true);
  }
  function handleCommentSubmit(comment: string, name: string) {
    const obj: NewCommentType = {
      comment: comment,
      name: name,
    };
    setNewComment(obj);
  }
  return (
    <>
      {recipe && <Recipe recipe={recipe} page={"recipePage"} />}
      {recipe && (
        <article>
          <h2>Ingredients</h2>
          <IngredientsList ingredients={recipe.ingredients} />
        </article>
      )}
      <article>
        <h2>Instructions</h2>
        <InstructionsList instructions={recipe?.instructions} />
      </article>
      <article>
        <Vote isVoted={isRated} handleVote={handleVote} />
      </article>
      <div>
        <h2>Comments</h2>
        <CommentForm handleCommentSubmit={handleCommentSubmit} />
        <CommentList comments={comments} />
      </div>
    </>
  );
};

export default Recipepage;
