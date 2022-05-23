import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { postRatingToAPI, ratingSlice } from "../features/ratings/ratingSlice";
import {
  postCommentByIdToAPI,
  fetchCommentByIdToAPI,
} from "../features/comments/commentsSlice";

const Recipepage = () => {
  const params = useParams();
  const [currVote, setVote] = useState<number>(-1);
  // const [comments, setComments] = useState<CommentType[]>([]);
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
  // const comments = useAppSelector<CommentType | []>(
  //   (state) => state.comments.comments
  // );
  useEffect(() => {
    if (params.recipeId) {
      let id: string = params.recipeId;
      dispatch(fetchRecipeByIdFromAPI(id));
    }
  }, [dispatch, params]);

  /**
   * Handle post rating communication with database
   */
  useEffect(() => {
    if (currVote > 0) {
      const postRecipeById = async () => {
        if (params.recipeId) {
          const obj = {
            id: params.recipeId,
            rating: currVote,
          };
          await dispatch(postRatingToAPI(obj));
        }
      };
      postRecipeById();
    } else {
      dispatch(ratingSlice.actions.resetInitState());
    }
  }, [currVote, dispatch, params]);

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
        //await postComments(params.recipeId, commentToPost);
        const obj = {
          id: params.recipeId,
          comment: commentToPost,
        };
        await dispatch(postCommentByIdToAPI(obj));
        //const getCommentsById = await fetchCommentsById(params.recipeId);
        //setComments(getCommentsById.data.comments);
        await dispatch(fetchCommentByIdToAPI(params.recipeId));
      } else {
        if (params.recipeId) {
          await dispatch(fetchCommentByIdToAPI(params.recipeId));
          //const getCommentsById = await fetchCommentsById(params.recipeId);
          //setComments(getCommentsById.data.comments);
        }
      }
    };
    handleComments();
  }, [dispatch, newComment.comment, newComment.name, params.recipeId]);

  function handleVote(value: number) {
    setVote(value);
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
        <Vote handleVote={handleVote} />
      </article>
      <div>
        <h2>Comments</h2>
        <CommentForm handleCommentSubmit={handleCommentSubmit} />
        <CommentList />
      </div>
    </>
  );
};

export default Recipepage;
