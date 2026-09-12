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

  // useState for add to stack
  const [addedTechnology, setAddedTechnology] = useState<TechTypes[]>([]);

  const handleAddToStack = (tech: TechTypes) => {
    setAddedTechnology([...addedTechnology, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      style: {
        border: "2px solid red",
        padding: "25px 35px",
        color: "#0A0F1D",
        backgroundColor: "#FFF5FA",
        fontWeight: "bold",
        borderRadius: "10px",
        fontSize: "15px",
      },
    });
  };

  // remove function for add to stack
  const handleRemoveTech = (tech: TechTypes) => {
    const restTech = addedTechnology.filter(
      (item: TechTypes) => item.id !== tech.id,
    );
    setAddedTechnology(restTech);
    toast.error(`${tech.name} Removed From Your Stack!`, {
      style: {
        border: "2px solid red",
        padding: "25px 35px",
        color: "#FFFFFF",
        backgroundColor: "#0A0F1D",
        fontWeight: "bold",
        borderRadius: "10px",
        fontSize: "15px",
      },
    });
  };

  // remove all function
  const handleRemoveAll = () => {
    setAddedTechnology([]);
     toast.error(`All Technologies Removed From Your Stack!`, {
      style: {
        border: "2px solid red",
        padding: "25px 35px",
        color: "#FFFFFF",
        backgroundColor: "#0A0F1D",
        fontWeight: "bold",
        borderRadius: "10px",
        fontSize: "15px",
      },
    });
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
        <div className="flex min-h-fit gap-10" id="technologies">
          <div className=" w-3/4">
            <TechnologiesAllCard
              technologies={technologies}
              handleAddToStack={handleAddToStack}
              addedTechnology={addedTechnology}
            />
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
                      <h2 className="card-title text-3xl mx-auto text-bold mb-5">
                        Your Stack
                      </h2>

                      {/* count technology */}
                      <p className="text-center mb-5">
                        <span className="inline-block px-4 py-2 rounded-2xl bg-pink-50 text-[#DB2777] text-sm font-semibold">
                          {addedTechnology.length} Technologies Selected
                        </span>
                      </p>

                      {addedTechnology.map(
                        (technology: TechTypes, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex justify-between border-2 border-gray-400 p-5"
                            >
                              <div className="flex gap-2">
                                <img
                                  src={technology.icon}
                                  alt=""
                                  className="h-10 w-10"
                                />
                                <h2 className="font-bold text-2xl">
                                  {technology.name}
                                </h2>
                                <p className="">{technology.category}</p>
                              </div>
                              <span
                                className="text-red-500 font-bold flex items-center text-[18px]"
                                onClick={() => handleRemoveTech(technology)}
                              >
                                <FaTrashAlt />
                              </span>
                            </div>
                          );
                        },
                      )}

                      <button
                        onClick={handleRemoveAll}
                        className="mt-10 text-red-600 text-xl btn py-6 border-red-600"
                      >
                        Remove All
                      </button>
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
