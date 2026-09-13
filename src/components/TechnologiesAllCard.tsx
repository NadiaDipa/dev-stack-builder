import type { TechTypes } from "../types/TechTypes";
import { SingleCard } from "./SingleCard";

interface TechnologiesProps {
  technologies: TechTypes[];
  handleAddToStack: any;
  addedTechnology: TechTypes[];
}

export const TechnologiesAllCard = ({
  technologies,
  handleAddToStack,
  addedTechnology,
}: TechnologiesProps) => {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch py-15 gap-6 lg:gap-10 px-4">
      {/* json single card */}
      {technologies.map((technology: TechTypes, ind: number) => {
        return (
          <SingleCard
            technology={technology}
            key={ind}
            handleAddToStack={handleAddToStack}
            addedTechnology={addedTechnology}
          />
        );
      })}
    </section>
  );
};
