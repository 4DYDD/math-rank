export type Operation = "addition" | "subtraction" | "multiplication";

export interface Question {
  id: number;
  num1: number;
  num2: number;
  operation: Operation;
  correctAnswer: number;
  options: [number, number];
  selectedAnswer?: number;
  isCorrect?: boolean;
  timeSpent?: number;
}

export interface GameStats {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  averageTime: number;
  questions: Question[];
  startTime: number;
  endTime?: number;
}

export interface GameHistory {
  games: GameStats[];
  lastPlayed?: number;
}
