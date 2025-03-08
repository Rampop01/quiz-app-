"use client";

import { useState } from "react";
import questions from "@/data/questions";

export const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (option === correctAnswer) {
      setScore((prev) => prev + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  return {
    currentQuestionIndex,
    selectedOption,
    score,
    showResult,
    questions,
    isCorrect,
    handleAnswer,
    nextQuestion,
    previousQuestion,
  };
};
