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

  const startGame = () => {
    const initialQuestions = Array.from({ length: 10 }, (_, i) =>
      generateQuestion(i + 1)
    );
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
      timeSpent: Date.now() - (currentQuestion.timeSpent || Date.now()),
    };

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = updatedQuestion;
    setQuestions(updatedQuestions);

    if (currentQuestionIndex < 9) {
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const stats = calculateScore(updatedQuestions);
      setGameStats(stats);
      saveGameHistory(stats);
      setGameStarted(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Math Game</h1>
          <Link
            href="/docs"
            className="text-secondary hover:text-secondary-dark font-semibold"
          >
            Tutorial Bermain
          </Link>
        </div>

        {!gameStarted && !gameStats && (
          <div className="text-center">
            <button
              onClick={startGame}
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all"
            >
              Start Game
            </button>
          </div>
        )}

        {gameStarted && currentQuestion && (
          <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
        )}

        {gameStats && <GameResult stats={gameStats} onPlayAgain={startGame} />}
      </div>
    </main>
  );
}
