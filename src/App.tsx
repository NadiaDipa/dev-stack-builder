import { Suspense } from "react";
import { Banner } from "./components/Banner";
import { Nav } from "./components/Nav";
import { TechnologiesParent } from "./components/TechnologiesParent";
import type { TechTypes } from "./types/TechTypes";
import { Toaster } from "react-hot-toast";


const technologyFetch = async (): Promise<TechTypes[]> => {
  const response = await fetch("/data.json");
  const technologyData = await response.json();
  return technologyData;
};


function App() {
  const technologyPromise = technologyFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <TechnologiesParent technologyPromise={technologyPromise} />
      </Suspense>
      <Toaster/>
    </>
  );
}

export default App;
