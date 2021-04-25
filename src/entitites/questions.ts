import {dataBaseService} from '../services/dataBaseService';

export class Questions {
  static createQuestion = (
    text: string,
    options: { text: string }[],
    answer: number
  ) => {
    const answers = [];
    options.map((option, id) => {
      answers.push({ text: option.text, id });
    });
    return dataBaseService.saveQuestion(text, answers, answer);
  };

  static getQuestion = (id)=>{
     return dataBaseService.getQuestion(id);
}

}






