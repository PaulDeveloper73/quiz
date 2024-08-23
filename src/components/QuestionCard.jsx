/* eslint-disable react/prop-types */
import { useState } from "react";

const QuestionCard = ({ qn, handleAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      handleAnswer(answer);
      setIsAnswered(true);
    }
  };

  return (
    <div>
      <h5 className="pt-10 text-lg font-normal text-slate-500">
        {qn.question}
      </h5>
      <div className="flex flex-col pt-4 space-y-2 text-slate-700">
        {qn.options.map((a, index) => {
          const isCorrectAnswer = qn.answer === a;
          const isSelectedAnswer = selectedAnswer === a;

          let borderClass = "border-slate-200";
          if (isAnswered) {
            if (isCorrectAnswer) {
              borderClass = "border-green-500";
            } else if (isSelectedAnswer && !isCorrectAnswer) {
              borderClass = "border-red-500";
            }
          }

          return (
            <span
              key={index}
              onClick={() => handleOptionClick(a)}
              className={`p-2 transition-all ease-in-out border cursor-pointer ${borderClass} ${
                isAnswered
                  ? "cursor-not-allowed"
                  : "hover:bg-blue-400 hover:text-slate-100 hover:ps-4 hover:rounded-md"
              }`}
              style={{ pointerEvents: isAnswered ? "none" : "auto" }}
            >
              {a}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
