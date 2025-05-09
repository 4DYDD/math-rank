import { Question } from "@/types/game";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: number) => void;
  disabled?: boolean;
}

const getOperationIcon = (operation: string) => {
  switch (operation) {
    case "addition":
      return faPlus;
    case "subtraction":
      return faMinus;
    case "multiplication":
      return faTimes;
    default:
      return faPlus;
  }
};

export default function QuestionCard({
  question,
  onAnswer,
  disabled = false,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4">
      <div className="text-center mb-3 sm:mb-4">
        <h2 className="text-lg sm:text-xl font-bold mb-2 text-primary">
          Question {question.id}
        </h2>
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-xl sm:text-2xl">
          <span className="text-gray-800">{question.num1}</span>
          <FontAwesomeIcon
            icon={getOperationIcon(question.operation)}
            className="text-primary w-4"
          />
          <span className="text-gray-800">{question.num2}</span>
          <span className="text-gray-800">= ?</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            disabled={disabled}
            className={`p-2 sm:p-3 rounded-lg text-base sm:text-lg font-semibold transition-all min-h-[50px] sm:min-h-[60px]
              ${
                disabled
                  ? "bg-gray-200 cursor-not-allowed text-gray-500"
                  : "bg-primary hover:bg-primary-dark text-white active:scale-95"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
