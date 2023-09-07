import React from "react";

interface Props {
  title: string;
  result: string | number;
}

const AvarageCard: React.FC<Props> = ({ title, result }) => {
  return (
    <div className="card bg-base-200 shadow-xl duration-300 transition-all hover:border hover:-translate-y-2">
      <div className="card-body">
        <div className="card-title ">
          <h2 className="text-center w-full">{title}</h2>
        </div>
        <p className="font-light text-xl text-center">{result}</p>
      </div>
    </div>
  );
};

export default AvarageCard;
