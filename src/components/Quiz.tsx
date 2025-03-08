"use client";

import React from "react";
import { useQuiz } from "@/hooks/useQuiz";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const {
    currentQuestionIndex,
    selectedOption,
    score,
    showResult,
    questions,
    isCorrect,
    handleAnswer,
    nextQuestion,
    previousQuestion,
  } = useQuiz();

  if (showResult) return <Result score={score} total={questions.length} />;

  return (
    <div className="quiz-container text-center">
      <h1 className="text-2xl font-bold mb-4 text-black">Quiz</h1>
      <p className="text-gray-600">Question {currentQuestionIndex + 1} of {questions.length}</p>

      <Question
        question={questions[currentQuestionIndex]}
        selectedOption={selectedOption}
        isCorrect={isCorrect}
        handleAnswer={handleAnswer}
      />

      <div className="mt-4 space-x-2">
        {currentQuestionIndex > 0 && (
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={previousQuestion}
          >
            Previous
          </button>
        )}

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          onClick={nextQuestion}
          disabled={!selectedOption}
        >
          {currentQuestionIndex + 1 === questions.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
