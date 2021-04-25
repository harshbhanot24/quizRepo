/* eslint-disable import/prefer-default-export */
import { Questions } from "../entitites/questions";
import { Quiz } from "../entitites/quiz";
import express from "express";

const userRouter = express.Router();
userRouter.get("/quiz/:id", (req, res, next) => {
  const id = req.params.id;
  const quiz = Quiz.getQuiz(id);
  res.send(quiz);
});


export { userRouter as default };
