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
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <FontAwesomeIcon
          icon={faTrophy}
          className="text-secondary text-5xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-primary">Game Over!</h2>
        <p className="text-gray-600">Your final score: {stats.score}</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-secondary mr-2" />
            <span className="text-gray-700">Correct Answers</span>
          </div>
          <span className="font-semibold text-primary">
            {stats.correctAnswers}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faXmark} className="text-secondary mr-2" />
            <span className="text-gray-700">Wrong Answers</span>
          </div>
          <span className="font-semibold text-primary">
            {stats.wrongAnswers}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-secondary mr-2" />
            <span className="text-gray-700">Average Time</span>
          </div>
          <span className="font-semibold text-primary">
            {stats.averageTime.toFixed(2)}s
          </span>
        </div>
      </div>

      <button
        onClick={onPlayAgain}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg transition-all"
      >
        Play Again
      </button>
    </div>
  );
}
