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
  const totaAnsweredQuestions = data.filter((d) => d.answered === false);
  const activeQuestion = data[activeQn];
  const correctAnswerClass = "border border-green-300";
  const wrongAnswerClass = "border border-red-300";
  const sleep = async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };
  const handleAnswer = (answer, i) => {
    console.log(i);

    const activeQn = [activeQuestion].find((c) => c.answer === answer);
    if (activeQn) {
      console.log("Corect answer");
    } else {
      console.log("wrong answer");
    }
  };
  const handleNextQuestion = async () => {
    setStatus(true);
    if (activeQn < totalQuestion) {
      await sleep(1000);
      setStatus(false);
      setActiveQn(activeQn + 1);
    }
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen space-y-10 gap-x-10 lg:flex-row bg-slate-100 bg-opacity-10 ">
        <div className="p-4 border rounded-md shadow-md bg-slate-100 min-w-[320px]  lg:min-w-[600px]">
          <h1 className="pb-4 text-4xl font-semibold text-blue-400 border-b-2 border-slate-300">
            Quiz App
          </h1>
          <section className="space-x-20">
            <span className="float-right text-slate-400 font-extralight">
              question: {activeQn + 1} of {totalQuestion}
            </span>
          </section>
          <section>
            {[activeQuestion].map((qn) => {
              return (
                <QuestionCard key={qn.id} qn={qn} handleAnswer={handleAnswer} />
              );
            })}
            <div className="pt-20">
              <button
                type="button"
                onClick={handleNextQuestion}
                className={
                  activeQn === totalQuestion - 1
                    ? "w-full py-3 text-xl bg-slate-300 border-none rounded-sm shadow-md outline-none text-slate-100  hover:cursor-none "
                    : "w-full py-3 text-xl bg-blue-400 border-none rounded-sm shadow-md outline-none text-slate-100 hover:ring-1 hover:ring-offset-4 hover:ring-blue-400 hover:cursor-pointer hover:bg-blue-500"
                }
                disabled={activeQn === totalQuestion - 1}
              >
                {status ? "Loading" : "Next"}

                {!status && (
                  <span className=" ps-2">
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
        <div className="p-4 bg-white border rounded-md shadow-md ">
          <div className="flex items-center justify-between">
            <h4 className="pb-4 text-2xl font-light border-b-2 text-slate-500 border-slate-300">
              Result Summary
            </h4>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-light text-slate-400">
                3/{totalQuestion}
              </span>
              <span className="text-xs text-slate-400 font-extralight">
                scored
              </span>
            </div>
          </div>
          <section>
            <div className="overflow-y-scroll max-h-52">
              <div>
                <div className="flex items-center justify-start pt-4 gap-x-4">
                  <h5 className="font-light text-slate-600 text-md">
                    1. Which device is required for the internet connection?
                  </h5>
                  <span>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="text-blue-300"
                    />
                  </span>
                </div>
                {/* <p className="flex flex-col pt-2">
                  <span className="text-sm font-light text-slate-700">
                    Correct answer:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-500 ps-2"
                      />
                    </span>
                  </span>
                  <span className="text-sm font-light text-slate-700">
                    You selected:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faClose}
                        className="text-red-900 ps-2"
                      />
                    </span>
                  </span>
                </p> */}
              </div>
              <div>
                <div className="flex items-center justify-start pt-4 gap-x-4">
                  <h5 className="font-light text-slate-600 text-md">
                    2. Which device is required for the internet connection?
                  </h5>
                  <span>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="text-blue-300"
                    />
                  </span>
                </div>
                {/* <p className="flex flex-col pt-2">
                  <span className="text-sm font-light text-slate-700">
                    Correct answer:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-500 ps-2"
                      />
                    </span>
                  </span>
                  <span className="text-sm font-light text-slate-700">
                    You selected:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faClose}
                        className="text-red-900 ps-2"
                      />
                    </span>
                  </span>
                </p> */}
              </div>
              <div>
                <div className="flex items-center justify-start pt-4 gap-x-4">
                  <h5 className="font-light text-slate-600 text-md">
                    3. Which device is required for the internet connection?
                  </h5>
                  <span>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="text-blue-300"
                    />
                  </span>
                </div>
                {/* <p className="flex flex-col pt-2">
                  <span className="text-sm font-light text-slate-700">
                    Correct answer:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-500 ps-2"
                      />
                    </span>
                  </span>
                  <span className="text-sm font-light text-slate-700">
                    You selected:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faClose}
                        className="text-red-900 ps-2"
                      />
                    </span>
                  </span>
                </p> */}
              </div>
              <div>
                <div className="flex items-center justify-start pt-4 gap-x-4">
                  <h5 className="font-light text-slate-600 text-md">
                    4. Which device is required for the internet connection?
                  </h5>
                  <span>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="text-blue-300"
                    />
                  </span>
                </div>
                {/* <p className="flex flex-col pt-2">
                  <span className="text-sm font-light text-slate-700">
                    Correct answer:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-500 ps-2"
                      />
                    </span>
                  </span>
                  <span className="text-sm font-light text-slate-700">
                    You selected:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faClose}
                        className="text-red-900 ps-2"
                      />
                    </span>
                  </span>
                </p> */}
              </div>

              <div>
                <div className="flex items-center justify-start pt-4 gap-x-4">
                  <h5 className="font-light text-slate-600 text-md">
                    5. Which device is required for the internet connection?
                  </h5>
                  <span>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="text-blue-300"
                    />
                  </span>
                </div>
                {/* <p className="flex flex-col pt-2">
                  <span className="text-sm font-light text-slate-700">
                    Correct answer:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-500 ps-2"
                      />
                    </span>
                  </span>
                  <span className="text-sm font-light text-slate-700">
                    You selected:{" "}
                    <span className="text-sm text-slate-400">
                      modem
                      <FontAwesomeIcon
                        icon={faClose}
                        className="text-red-900 ps-2"
                      />
                    </span>
                  </span>
                </p> */}
              </div>
            </div>
            {/* Summary */}
            <div className="mt-8 border-t border-slate-300">
              <p className="flex flex-wrap py-2 divide-x-2 gap-x-6">
                <span className="text-sm font-medium text-slate-700">
                  Correct answers:{" "}
                  <span className="text-sm font-bold text-slate-600">
                    3
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 ps-2"
                    />
                  </span>
                </span>
                <span className="text-sm font-medium text-slate-700 ps-4">
                  Wrong answers:{" "}
                  <span className="text-sm font-bold text-slate-600">
                    2
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
                  className="w-full py-3 text-xl text-blue-400 border rounded-sm shadow-md outline-none hover:ring-1 hover:text-slate-100 hover:ring-offset-4 hover:ring-blue-400 hover:cursor-pointer hover:bg-blue-500"
                >
                  Rest Quiz{" "}
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
