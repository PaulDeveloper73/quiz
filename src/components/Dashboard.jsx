import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./Questions";
import Loading from "./Loading";
import {
  faArrowRight,
  faCheck,
  faClose,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";

const Dashboard = () => {
  const totalQuestion = data.length;
  const [activeQn, setActiveQn] = useState(0);
  const [loader, setLoader] = useState(true);
  const [status, setStatus] = useState(false);
  const [questions, setQuestions] = useState(data);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const answeredQuestion = questions.filter((qn) => qn.answered);
  const lastAnsweredQuestion = activeQn === totalQuestion - 1;

  useEffect(() => {
    if (lastAnsweredQuestion) {
      const isLastQuestion = questions.find(
        (qn) => qn.id === totalQuestion && qn.answered
      );
      if (isLastQuestion) {
        setMessage(true);
      }
    }
  }, [lastAnsweredQuestion, questions, totalQuestion]);

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
  };
  const isQuestionAnswered = async () => {
    const id = activeQn + 1;
    const qn = questions.find((qn) => qn.id === id);
    return qn.answered;
  };
  const handleNextQuestion = async () => {
    setStatus(true);
    const IsAnswered = await isQuestionAnswered();
    if (IsAnswered) {
      if (activeQn < totalQuestion - 1) {
        await sleep(100);
        setStatus(false);
        setError(false);
        setActiveQn(activeQn + 1);
      }
    } else {
      setStatus(false);
      setError(true);
    }
  };

  if (loader) {
    return <Loading setLoader={setLoader} />;
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen space-y-10 gap-x-10 lg:flex-row bg-slate-100 bg-opacity-10">
        <div className="p-4 border rounded-md shadow-md bg-slate-100 min-w-[320px] lg:min-w-[600px]">
          <h1 className="pb-4 text-3xl font-semibold text-blue-500 border-b-2 sm:text-4xl border-slate-300">
            Quiz App
          </h1>
          <section className="space-x-20">
            {!message && (
              <span className="float-right text-slate-400 font-extralight">
                Question: {activeQn + 1} of {totalQuestion}
              </span>
            )}
          </section>
          <section className={message ? "text-center mt-10" : ""}>
            {message
              ? "Thank you for participating in the test!"
              : questions
                  .filter((qn) => qn.id === activeQn + 1)
                  .map((qn) => (
                    <QuestionCard
                      key={qn.id}
                      qn={qn}
                      handleAnswer={handleAnswer}
                      setError={setError}
                    />
                  ))}
            {message && (
              <div className="flex flex-col items-center justify-center mt-4">
                <span className="text-4xl font-normal text-blue-600">
                  {questions.filter((qn) => qn.isCorrect).length}/
                  {totalQuestion}
                </span>
                <span className="text-md text-slate-500 font-extralight">
                  scored
                </span>
              </div>
            )}
            <div className="pt-6">
              {error && (
                <p className="pb-4 text-sm font-normal text-center text-red-500 animate-pulse">
                  Please select an answer
                </p>
              )}

              {!message && (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className={
                    lastAnsweredQuestion
                      ? "w-full py-3 text-xl bg-slate-300 border-none rounded-sm shadow-md outline-none text-slate-100 hover:cursor-none"
                      : "w-full py-3 text-xl bg-blue-400 border-none rounded-sm shadow-md outline-none text-slate-100 hover:ring-1 hover:ring-offset-4 hover:ring-blue-400 hover:cursor-pointer hover:bg-blue-500"
                  }
                  disabled={lastAnsweredQuestion}
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
              )}
            </div>
          </section>
        </div>
        <div className="p-4 bg-white border rounded-md shadow-md">
          <div className="items-center ">
            <h4 className="pb-4 text-2xl font-light border-b-2 text-slate-500 border-slate-300">
              Result Summary
            </h4>
          </div>
          <section>
            <div className="overflow-y-scroll max-h-52">
              {answeredQuestion.map((qn) => (
                <div key={qn.id}>
                  <div className="flex items-center justify-start pt-4 gap-x-4">
                    <h5 className="text-sm font-normal text-slate-500">
                      {qn.answered && (
                        <>
                          {qn.id}. {qn.question}
                        </>
                      )}
                      <span className="ps-2">
                        <FontAwesomeIcon
                          icon={qn.isCorrect ? faCheck : faClose}
                          className={
                            qn.isCorrect ? "text-green-500" : "text-red-900"
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
