const QuestionCard = ({ qn, handleAnswer }) => {
  return (
    <div>
      <h5 className="pt-10 text-lg font-light text-slate-500">{qn.question}</h5>
      <div className="flex flex-col *:text-slate-700 space-y-2 pt-4">
        {qn.options.map((a, index) => {
          return (
            <span
              key={index}
              onClick={() => handleAnswer(a)}
              className="p-2 transition-all ease-in-out border cursor-pointer border-slate-200 hover:bg-blue-400 hover:text-slate-100 hover:ps-4 hover:rounded-md"
            >
              {a}
            </span>
          );
        })}
        {/* <span className="p-2 transition-all ease-in-out border cursor-pointer border-slate-200 hover:bg-blue-400 hover:text-slate-100 hover:ps-4 hover:rounded-md">
          A: Modem
        </span>
        <span className="p-2 transition-all ease-in-out border cursor-pointer border-slate-200 hover:bg-blue-400 hover:text-slate-100 hover:ps-4 hover:rounded-md">
          B: Router
        </span>
        <span className="p-2 transition-all ease-in-out border cursor-pointer border-slate-200 hover:bg-blue-400 hover:text-slate-100 hover:ps-4 hover:rounded-md">
          C: LAN Cable
        </span>
        <span className="p-2 transition-all ease-in-out border cursor-pointer border-slate-200 hover:bg-blue-400 hover:text-slate-100 hover:ps-4 hover:rounded-md">
          D: Pen Drive
        </span> */}
      </div>
    </div>
  );
};

export default QuestionCard;
