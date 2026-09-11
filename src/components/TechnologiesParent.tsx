import { use } from "react";
import { TechnologiesAllCard } from "./TechnologiesAllCard";
import type { TechTypes } from "../types/TechTypes";

interface TechnologyAllCardProps {
  technologyPromise: Promise<TechTypes[]>;
}

export const TechnologiesParent = ({
  technologyPromise,
}: TechnologyAllCardProps) => {
  const technologies = use(technologyPromise);
  // console.log(technologyUse);
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
        <div className="flex min-h-">
          <div className=" w-3/4">
            <TechnologiesAllCard technologies={technologies}/>
          </div>

          <div className="w-1/4 bg-slate-900 grid grid-cols-1">sidebar</div>
        </div>
      </section>
    </main>
  );
};
