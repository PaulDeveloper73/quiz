import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./Questions";
import {
  faArrowRight,
  faCheck,
  faClose,
  faPlusCircle,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import QuestionCard from "./QuestionCard";

const Dashboard = () => {
  const totalQuestion = data.length;
  const [activeQn, setActiveQn] = useState(0);
  const [status, setStatus] = useState(false);
  const [questions, setQuestions] = useState(data);
  const answeredQuestion = questions.filter((qn) => qn.answered);

  const sleep = async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleAnswer = (answer) => {
    let updatedQuestions = questions.map((qn) => {
      if (qn.id === activeQn + 1) {
        return {
          ...qn,
          answered: true,
          userAnswer: answer,
          isCorrect: qn.answer === answer,
        };
      }
      return qn;
    });
    setQuestions(updatedQuestions);
    console.log(updatedQuestions);
  };

  const handleNextQuestion = async () => {
    setStatus(true);
    if (activeQn < totalQuestion - 1) {
      await sleep(1000);
      setStatus(false);
      setActiveQn(activeQn + 1);
    }
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen space-y-10 gap-x-10 lg:flex-row bg-slate-100 bg-opacity-10">
        <div className="p-4 border rounded-md shadow-md bg-slate-100 min-w-[320px] lg:min-w-[600px]">
          <h1 className="pb-4 text-4xl font-semibold text-blue-400 border-b-2 border-slate-300">
            Quiz App
          </h1>
          <section className="space-x-20">
            <span className="float-right text-slate-400 font-extralight">
              Question: {activeQn + 1} of {totalQuestion}
            </span>
          </section>
          <section>
            {questions
              .filter((qn) => qn.id === activeQn + 1)
              .map((qn) => (
                <QuestionCard key={qn.id} qn={qn} handleAnswer={handleAnswer} />
              ))}
            <div className="pt-20">
              <button
                type="button"
                onClick={handleNextQuestion}
                className={
                  activeQn === totalQuestion - 1
                    ? "w-full py-3 text-xl bg-slate-300 border-none rounded-sm shadow-md outline-none text-slate-100 hover:cursor-none"
                    : "w-full py-3 text-xl bg-blue-400 border-none rounded-sm shadow-md outline-none text-slate-100 hover:ring-1 hover:ring-offset-4 hover:ring-blue-400 hover:cursor-pointer hover:bg-blue-500"
                }
                disabled={activeQn === totalQuestion - 1}
              >
                {status ? "Loading" : "Next"}
                {!status && (
                  <span className="ps-2">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-sm font-light"
                    />
                  </span>
                )}
              </button>
            </div>
          </section>
        </div>
        <div className="p-4 bg-white border rounded-md shadow-md">
          <div className="flex items-center justify-between">
            <h4 className="pb-4 text-2xl font-light border-b-2 text-slate-500 border-slate-300">
              Result Summary
            </h4>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-light text-slate-400">
                {questions.filter((qn) => qn.isCorrect).length}/{totalQuestion}
              </span>
              <span className="text-xs text-slate-400 font-extralight">
                scored
              </span>
            </div>
          </div>
          <section>
            <div className="overflow-y-scroll max-h-52">
              {answeredQuestion.map((qn) => (
                <div key={qn.id}>
                  <div className="flex items-center justify-start pt-4 gap-x-4">
                    <h5 className="font-light text-slate-600 text-md">
                      {qn.answered && (
                        <>
                          {qn.id} {qn.question}
                        </>
                      )}
                      <span className="ps-2">
                        <FontAwesomeIcon
                          icon={
                            qn.isCorrect
                              ? faCheck
                              : qn.answered
                              ? faClose
                              : faPlusCircle
                          }
                          className={
                            qn.isCorrect
                              ? "text-green-500"
                              : qn.answered
                              ? "text-red-900"
                              : "text-blue-300"
                          }
                        />
                      </span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-slate-300">
              <p className="flex flex-wrap py-2 divide-x-2 gap-x-6">
                <span className="text-sm font-medium text-slate-700">
                  Correct answers:{" "}
                  <span className="text-sm font-bold text-slate-600">
                    {questions.filter((qn) => qn.isCorrect).length}
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 ps-2"
                    />
                  </span>
                </span>
                <span className="text-sm font-medium text-slate-700 ps-4">
                  Wrong answers:{" "}
                  <span className="text-sm font-bold text-slate-600">
                    {
                      questions.filter((qn) => !qn.isCorrect && qn.answered)
                        .length
                    }
                    <FontAwesomeIcon
                      icon={faClose}
                      className="text-red-900 ps-2"
                    />
                  </span>
                </span>
                <span className="text-sm font-medium text-slate-700 ps-4">
                  Total Questions:{" "}
                  <span className="text-sm font-bold text-slate-600">
                    {totalQuestion}
                  </span>
                </span>
              </p>
              <div className="pt-10">
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="w-full py-3 text-xl text-blue-400 border rounded-sm shadow-md outline-none hover:ring-1 hover:text-slate-100 hover:ring-offset-4 hover:ring-blue-400 hover:cursor-pointer hover:bg-blue-500"
                >
                  Reset Quiz{" "}
                  <span>
                    <FontAwesomeIcon icon={faShare} />
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
