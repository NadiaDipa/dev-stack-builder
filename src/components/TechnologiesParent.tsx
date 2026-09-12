import { use, useState } from "react";
import { TechnologiesAllCard } from "./TechnologiesAllCard";
import type { TechTypes } from "../types/TechTypes";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
// import { FaTrashAlt } from "react-icons/fa";

interface TechnologyAllCardProps {
  technologyPromise: Promise<TechTypes[]>;
}

export const TechnologiesParent = ({
  technologyPromise,
}: TechnologyAllCardProps) => {
  const technologies = use(technologyPromise);
  // console.log(technologyUse);

  // const [techAdd, setTechAdd] = useState(false);
  const [addedTechnology, setAddedTechnology] = useState<TechTypes[]>([])

  const handleAddToStack = (tech: TechTypes) => {
  setAddedTechnology([...addedTechnology, tech]);
  toast.success(`${tech.name} added to your stack!`);
};

  return (
    <main className="container mx-auto">
      <section className="">
        <h1 className="font-bold text-5xl">
          Explore the
          <span className="bg-linear-to-r from-[#EC4899] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent inline-block pr-2">
            Technologies
          </span>
        </h1>

        <p className="text-[#64748B] py-3 text-xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </section>

      <section>
        <div className="flex min-h-fit gap-10">
          <div className=" w-3/4">
            <TechnologiesAllCard technologies={technologies} handleAddToStack={handleAddToStack}/>
          </div>

          <div className="w-1/4 grid grid-cols-1 py-15">
            <section className="h-full mt-auto">
              {addedTechnology.length === 0 ? (
                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <h2 className="card-title text-2xl">Your Stack</h2>
                    <p className="text-[#94A3B8] text-xs">
                      No technologies selected yet
                    </p>
                    <div className="card-actions justify-end ">
                      <button className="w-full btn btn-dash h-24 border-[#E2E8F0] text-[#94A3B8] rounded-xl text-sm">
                        Your Stack is empty
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card bg-base-100 shadow-sm rounded-3xl">
                  <div className="card-body">
                    <div className="card-actions justify-end grid grid-cols-1">
                        {addedTechnology.map((technology: TechTypes, index : number) => {
                          return ( 
                            <div key={index} className="flex justify-between border-2 border-gray-400 p-5">
                              <div className="flex gap-2">
                                <img
                                  src={technology.icon}
                                  alt=""
                                  className="h-10 w-10"
                                />
                                <h2 className="font-bold text-2xl">
                                  {technology.name}
                                </h2>
                                <p className="">
                                  {technology.category}
                                </p>
                              </div>
                              <span className="text-red-500 font-bold flex items-center text-[18px]">
                                <FaTrashAlt />
                              </span>
                            </div>
                          );
                        })}
                      
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};
