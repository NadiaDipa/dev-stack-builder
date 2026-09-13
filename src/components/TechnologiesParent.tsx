import { use, useState } from "react";
import { TechnologiesAllCard } from "./TechnologiesAllCard";
import type { TechTypes } from "../types/TechTypes";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

interface TechnologyAllCardProps {
  technologyPromise: Promise<TechTypes[]>;
}

export const TechnologiesParent = ({technologyPromise}: TechnologyAllCardProps) => {

  // use hook
  const technologies = use(technologyPromise);

  // added technology storage ===> useState
  const [addedTechnology, setAddedTechnology] = useState<TechTypes[]>([]);

  // added new item handler function to stack
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

  // remove function 
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
    <main className="mx-auto px-4 max-w-[1600px]">
      {/* Heading */}
      <section className="text-center md:text-left">
        <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-[#64748B] py-3 text-base sm:text-lg xl:text-xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </section>

      {/* Technologies and Your Stack */}
      <section>
        <div
          className="flex flex-col xl:flex-row items-start gap-8 lg:gap-10"
          id="technologies"
        >
          {/* Technologies Cards */}
          <div className="w-full xl:w-3/4">
            <TechnologiesAllCard
              technologies={technologies}
              handleAddToStack={handleAddToStack}
              addedTechnology={addedTechnology}
            />
          </div>

          {/* Your Stack */}
          <div className="w-full xl:w-1/4">
            <section className="w-full">
              {addedTechnology.length === 0 ? (
                <div className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <h2 className="card-title text-xl sm:text-2xl justify-center w-full">
                      Your Stack
                    </h2>

                    <p className="text-[#94A3B8] text-base sm:text-[17px] text-center w-full">
                      No technologies selected yet
                    </p>

                    <div className="card-actions justify-end">
                      <button className="w-full btn btn-dash min-h-16 h-auto py-4 border-[#E2E8F0] text-[#94A3B8] rounded-xl text-base sm:text-lg">
                        Your Stack is empty
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card bg-base-100 shadow-sm rounded-xl">
                  <div className="card-body">
                    <div className="card-actions justify-end grid grid-cols-1">
                      <h2 className="card-title text-2xl sm:text-3xl mx-auto mb-5">
                        Your Stack
                      </h2>

                      {/* Count */}
                      <p className="text-center mb-5">
                        <span className="inline-block px-3 sm:px-4 py-2 rounded-2xl bg-pink-50 text-[#DB2777] text-sm sm:text-[17px] font-semibold">
                          {addedTechnology.length} Technologies Selected
                        </span>
                      </p>

                      {/* your stack technology list ===> selected item */}
                      {addedTechnology.map(
                        (technology: TechTypes, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between gap-3 border-2 border-gray-200 rounded-xl p-3 sm:p-4"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  src={technology.icon}
                                  alt=""
                                  className="h-10 w-10 shrink-0"
                                />

                                <div className="min-w-0">
                                  <h2 className="font-bold text-base sm:text-lg lg:text-xl truncate">
                                    {technology.name}
                                  </h2>

                                  <p className="text-sm text-[#64748B]">
                                    {technology.category}
                                  </p>
                                </div>
                              </div>

                              <span
                                className="text-red-500 font-bold flex items-center text-[18px] shrink-0 cursor-pointer"
                                onClick={() => handleRemoveTech(technology)}
                              >
                                <FaTrashAlt className="text-xl" />
                              </span>
                            </div>
                          );
                        },
                      )}

                      {/* remove all button */}
                      <button
                        onClick={handleRemoveAll}
                        className="mt-6 text-red-600 text-base sm:text-lg btn py-5 border-red-600"
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
