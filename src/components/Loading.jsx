import { useEffect } from "react";
const Loading = ({ setLoader }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setLoader]);

  return (
    <div className="flex flex-col  gap-y-6 items-center justify-center min-h-screen bg-white">
      <h1 className=" text-center font-extralight text-sm"> Welcome!</h1>
      <h1 className="text-3xl text-blue-600 text-center">
        Boost IQ With Super Quiz App
      </h1>
      <img src="./loading.gif" className="size-40" />
    </div>
  );
};

export default Loading;
