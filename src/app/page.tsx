"use client";

import { useState, useEffect } from "react";
import QuestionCard from "@/components/QuestionCard";
import GameResult from "@/components/GameResult";
import { Question, GameStats } from "@/types/game";
import {
  generateQuestion,
  calculateScore,
  saveGameHistory,
} from "@/utils/gameLogic";
import Link from "next/link";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [gameStats, setGameStats] = useState<GameStats | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  const startGame = () => {
    const gameStartTime = Date.now();
    setStartTime(gameStartTime);
    const initialQuestions = Array.from({ length: 10 }, (_, i) => ({
      ...generateQuestion(i + 1),
      timeSpent: gameStartTime,
    }));
    setQuestions(initialQuestions);
    setCurrentQuestion(initialQuestions[0]);
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    setGameStats(null);
  };

  const handleAnswer = (answer: number) => {
    if (!currentQuestion) return;

    const updatedQuestion = {
      ...currentQuestion,
      selectedAnswer: answer,
      isCorrect: answer === currentQuestion.correctAnswer,
    };

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = updatedQuestion;
    setQuestions(updatedQuestions);

    if (currentQuestionIndex < 9) {
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const stats = calculateScore(updatedQuestions, startTime || Date.now());
      setGameStats(stats);
      saveGameHistory(stats);
      setGameStarted(false);
      setStartTime(null);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            Math Game
          </h1>
          <Link
            href="/docs"
            className="clicked text-secondary hover:text-secondary-dark transall font-bold shadow border rounded-lg border-red-200 hover:border-red-300 hover:bg-red-100 px-4 py-2 text-sm"
          >
            Tutorial Bermain
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          {!gameStarted && !gameStats && (
            <div className="text-center">
              <button
                onClick={startGame}
                className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg text-base transition-all w-full sm:w-auto"
              >
                Start Game
              </button>
            </div>
          )}

          {gameStarted && currentQuestion && (
            <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
          )}

          {gameStats && (
            <GameResult stats={gameStats} onPlayAgain={startGame} />
          )}
        </div>
      </div>
    </main>
  );
}
