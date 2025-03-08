import React from "react";

interface ResultProps {
  score: number;
  total: number;
}

const Result: React.FC<ResultProps> = ({ score, total }) => {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold">Quiz Completed!</h2>
      <p className="mt-4 text-lg">Your Score: <span className="text-blue-500 font-bold">{score}</span> / {total}</p>
    </div>
  );
};

export default Result;
