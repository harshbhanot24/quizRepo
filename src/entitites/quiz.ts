import { dataBaseService } from "../services/dataBaseService";
import { Questions  as QuestionEntity} from './questions';
export class Quiz {
  static createQuiz = (name: string, questions: []) => {
    return dataBaseService.saveQuiz(name, questions);
  };

  static getQuiz = (id) =>{
      return dataBaseService.getQuiz(id);
  }

  static SubmitQuiz= (quizId: number, ans: {questionId: number , answerId: number}[]) =>{
    const quiz = Quiz.getQuiz(quizId);
    const questions = quiz.questions;
    const reqQuestion = {};
    questions.forEach(id=>{
        const question = QuestionEntity.getQuestion(id);
        reqQuestion[question.id] = question.answer;
    });
    let count =0;
     ans.forEach(answer=>{
         if(reqQuestion[answer.questionId] === answer.answerId){
             count++;
         }
     });
     return {
       correct: count,
       wrong: ans.length - count,
       total: questions.length,
     };
  }
}
