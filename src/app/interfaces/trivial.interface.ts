export interface Trivial {
  question: string;
  showed: boolean;
  totalCorrectAnswers: number
  answers: Answer[];
}

export interface Answer {
  answer: string;
  correct: boolean;
  selected: boolean;
}
