import type { TechTypes } from "../types/TechTypes";
import { SingleCard } from "./SingleCard";


interface TechnologiesProps{
  technologies: TechTypes[];
}

export const TechnologiesAllCard = ({technologies}:TechnologiesProps) => {

  return (
    <section className="w-full grid grid-cols-3 py-15 gap-10">
      {
        technologies.map((technology:TechTypes, ind: number)=>{
          return <SingleCard technology={technology} key={ind}/>
          
        })
      }
    </section>
  );
};
