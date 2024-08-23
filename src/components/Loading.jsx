import { useEffect } from "react";
/* eslint-disable react/prop-types */
const Loading = ({ setLoader }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setLoader]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-y-6">
      <h1 className="text-sm font-medium text-center"> Welcome!</h1>
      <h1 className="text-3xl font-normal text-center text-blue-600">
        Boost IQ With Super Quiz App
      </h1>
      <img src="./loading.gif" className="size-40" />
    </div>
  );
};

export default Loading;
