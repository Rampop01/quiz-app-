import React from "react";

interface QuestionProps {
  question: { question: string; options: string[]; answer: string };
  selectedOption: string | null;
  isCorrect: boolean | null;
  handleAnswer: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, selectedOption, isCorrect, handleAnswer }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">{question.question}</h2>
      <div className="mt-4">
        {question.options.map((option, index) => {
          let buttonClass = "w-full p-2 border rounded my-2 transition";
          
          if (selectedOption) {
            if (option === question.answer) {
              buttonClass += " bg-green-500 text-white"; 
            } else if (option === selectedOption) {
              buttonClass += " bg-red-500 text-white"; 
            } else {
              buttonClass += " bg-gray-200"; 
            }
          } else {
            buttonClass += " hover:bg-blue-200"; 
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedOption}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
