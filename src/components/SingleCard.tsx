import { useState } from "react";
import type { TechTypes } from "../types/TechTypes";

interface SingleProps {
  technology: TechTypes;
  handleAddToStack: any
}

export const SingleCard = ({ technology, handleAddToStack }: SingleProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectTech = () => {
    setIsSelected(true);
    handleAddToStack(technology);
  };

  return (
    <section>
      <div className={`card bg-base-100 shadow-sm h-full
        ${isSelected === true  
          ? "border-2 border-[#EC4899]" 
          : "border border-gray-200"
        }
        `}>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="w-16 h-16">
              <img src={technology.icon} alt="" />
            </div>
            <span
              className={`border border-current/20 badge rounded-full font-semibold h-6.75 text-[13px] px-3 flex items-center 
              ${
                isSelected
                ? "bg-[#FCE7F3] text-[#DB2777]"
                : `${technology.badgeBg} ${technology.badgeText}`
              }`}
            >
              {technology.badge}
            </span>
          </div>

          <div className="">
            <h2 className="text-2xl font-bold py-5">{technology.name}</h2>
            <p className="text-[#64748B] text-xl pb-5">
              {technology.description}
            </p>
          </div>

          <div className="flex justify-between">
            <span className="badge badge-ls text-[#475569] bg-[#F1F5F9] rounded font-semibold">
              {technology.category}
            </span>

            <span className="badge badge-ls text-[#64748B] font-semibold">
              {technology.difficulty}
            </span>
            <div className="flex items-center gap-2">
              <span className="mask mask-star-2 bg-amber-400 w-4 h-4"></span>

              <span className="font-bold text-[#334155]">
                {technology.rating}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => handleSelectTech()}
              className={`btn btn-block h-12 py-6 rounded-xl text-[16px]
                ${
                  isSelected === true
                  ? "bg-[#fff9fc] text-[#DB2777]  font-semibold"
                  : "bg-[#0A0F1D] text-white border-2 border-transparent"
                  }
                `}
              disabled={isSelected === true ? true : false}
            >
              {isSelected === true ? "Added to Stack" : "Add to Stack"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
