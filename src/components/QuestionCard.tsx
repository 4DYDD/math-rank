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
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Question {question.id}
        </h2>
        <div className="flex items-center justify-center space-x-4 text-3xl">
          <span className="text-gray-800">{question.num1}</span>
          <FontAwesomeIcon
            icon={getOperationIcon(question.operation)}
            className="text-primary"
          />
          <span className="text-gray-800">{question.num2}</span>
          <span className="text-gray-800">= ?</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            disabled={disabled}
            className={`p-4 rounded-lg text-xl font-semibold transition-all
              ${
                disabled
                  ? "bg-gray-200 cursor-not-allowed text-gray-500"
                  : "bg-primary hover:bg-primary-dark text-white"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
