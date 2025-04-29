import { Operation, Question, GameStats, GameHistory } from "@/types/game";

const OPERATIONS: Operation[] = ["addition", "subtraction", "multiplication"];

export const generateQuestion = (id: number): Question => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];

  let correctAnswer: number;
  switch (operation) {
    case "addition":
      correctAnswer = num1 + num2;
      break;
    case "subtraction":
      correctAnswer = num1 - num2;
      break;
    case "multiplication":
      correctAnswer = num1 * num2;
      break;
  }

  // Generate a wrong answer that's different from the correct one
  let wrongAnswer: number;
  do {
    wrongAnswer =
      correctAnswer +
      (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 5) + 1);
  } while (wrongAnswer === correctAnswer);

  // Randomly assign correct and wrong answers to options
  const options: [number, number] =
    Math.random() > 0.5
      ? [correctAnswer, wrongAnswer]
      : [wrongAnswer, correctAnswer];

  return {
    id,
    num1,
    num2,
    operation,
    correctAnswer,
    options,
  };
};

export const calculateScore = (
  questions: Question[],
  startTime: number
): GameStats => {
  const correctAnswers = questions.filter((q) => q.isCorrect).length;
  const endTime = Date.now();
  const totalTime = endTime - startTime;

  return {
    score: correctAnswers * 10,
    correctAnswers,
    wrongAnswers: questions.length - correctAnswers,
    totalTime,
    questions,
    startTime,
    endTime,
  };
};

export const saveGameHistory = (gameStats: GameStats) => {
  const history: GameHistory = JSON.parse(
    localStorage.getItem("mathGameHistory") || '{"games": []}'
  );
  history.games.push(gameStats);
  history.lastPlayed = Date.now();
  localStorage.setItem("mathGameHistory", JSON.stringify(history));
};

export const getGameHistory = (): GameHistory => {
  return JSON.parse(localStorage.getItem("mathGameHistory") || '{"games": []}');
};
