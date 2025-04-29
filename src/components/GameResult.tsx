import { GameStats } from "@/types/game";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faClock,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface GameResultProps {
  stats: GameStats;
  onPlayAgain: () => void;
}

export default function GameResult({ stats, onPlayAgain }: GameResultProps) {
  const totalQuestions = stats.correctAnswers + stats.wrongAnswers;
  const correctPercentage = (stats.correctAnswers / totalQuestions) * 100;

  const getVictoryMessage = () => {
    if (correctPercentage === 100) {
      return {
        message: "Well Played!",
        emoji: "🏆",
        trophyCount: 3,
      };
    } else if (correctPercentage >= 60) {
      return {
        message: "Not Bad!",
        emoji: "👍",
        trophyCount: 2,
      };
    } else {
      return {
        message: "Game Over!",
        emoji: "😅",
        trophyCount: 1,
      };
    }
  };

  const victoryStatus = getVictoryMessage();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 font-semibold">
      <div className="text-center mb-3 sm:mb-4">
        <div className="flex justify-center gap-2 mb-2 sm:mb-3">
          {Array.from({ length: victoryStatus.trophyCount }).map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faTrophy}
              className="text-[var(--color-trophy)] text-3xl sm:text-4xl"
            />
          ))}
        </div>
        <h2 className="text-lg sm:text-xl font-bold mb-1 text-primary">
          {victoryStatus.message}
        </h2>
        <p className="text-3xl mb-1">{victoryStatus.emoji}</p>
        <p className="text-gray-600 text-base sm:text-lg mt-6">
          Your final score : {stats.score}
        </p>
      </div>

      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
        <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-primary mr-1 w-4" />
            <span className="text-gray-700 text-sm">Correct Answers</span>
          </div>
          <span className="font-semibold text-primary text-base">
            {stats.correctAnswers}
          </span>
        </div>

        <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-secondary mr-1 w-4"
            />
            <span className="text-gray-700 text-sm">Wrong Answers</span>
          </div>
          <span className="font-semibold text-primary text-base">
            {stats.wrongAnswers}
          </span>
        </div>

        <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-yellow-600 mr-1 w-4"
            />
            <span className="text-gray-700 text-sm">Total Time Playing</span>
          </div>
          <span className="font-semibold text-primary text-base">
            {(stats.totalTime / 1000).toFixed(1)}s
          </span>
        </div>
      </div>

      <button
        onClick={onPlayAgain}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-all active:scale-95 text-sm sm:text-base"
      >
        Play Again
      </button>
    </div>
  );
}
