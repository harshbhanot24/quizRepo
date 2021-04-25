/* eslint-disable import/prefer-default-export */
import { Questions } from '../entitites/questions';
import {Quiz} from '../entitites/quiz';
import express from 'express';

const adminRouter = express.Router();
 adminRouter.post("/question", (req, res, next)=>{
    const body= req.body;
    const data: {text:string, options:{text:string}[], answer:number } =body;
   const question = Questions.createQuestion(
     data.text,
     data.options,
     data.answer
   );
   res.send(question);
 });

  adminRouter.post("/quiz", (req, res, next) => {
    const body = req.body;
    const data: {
      name: string;
      questions: [];
    } = body;
    const question = Quiz.createQuiz(data.name, data.questions);
    res.send(question);
  });

export { adminRouter as default };
