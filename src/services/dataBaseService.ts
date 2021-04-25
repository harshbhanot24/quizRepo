export class dataBaseService {
  static questions; // {questions: , }
  static quizes;
  static saveQuestion(
    text: string,
    options: { text: string }[],
    answer: number
  ) {
    console.log(this.questions);
    //   const lastQuestion = this.data?.questions[this.data.questions.length-1];
    //   const id = lastQuestion ? lastQuestion.id+1 : 1;
    if (!this.questions) {
      this.questions = [];
    }
    const id = this.questions.length + 1;
    const question = {
      id,
      text,
      options,
      answer,
    };
    this.questions.push(question);
    return question;
  }

  static getQuestion(id){
      let res;
    this.questions.forEach((question) => {
      if (question.id == id) {
       res = question;
      }
    });
    return res;
  }

  static saveQuiz(name: string, questions: []) {
    if (!this.quizes) {
      this.quizes = [];
    }
    const id = this.quizes.length + 1;
    const quiz = {
      id,
      name,
      questions,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.quizes.push(quiz);
    return quiz;
  }

  static getQuiz(id) {
    let quizRes;
    this.quizes.forEach((quiz) => {
      if (quiz.id === id) {
        quizRes = quiz;
      }
    });
    const questions = quizRes.questions;
    let res = [];
    questions.forEach((id) => {
      this.questions.forEach((question) => {
        if (question.id == id) {
          res.push(question);
        }
      });
    });
    return {
      quizId: id,
      questions: res,
    };
  }
}






