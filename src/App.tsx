import { Suspense } from "react";
import { Banner } from "./components/Banner";
import { Nav } from "./components/Nav";
import { TechnologiesParent } from "./components/TechnologiesParent";
import type { TechTypes } from "./types/TechTypes";
import { Toaster } from "react-hot-toast";
import { Footer } from "./components/Footer";

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
      <Suspense
        fallback={
          <div className="min-h-100 flex flex-col items-center justify-center gap-4">
            <span className="loading loading-spinner loading-lg text-[#DB2777]"></span>
            <p className="text-[#64748B] text-lg font-medium">
              Loading technologies...
            </p>
          </div>
        }
      >
        <TechnologiesParent technologyPromise={technologyPromise} />
      </Suspense>

      <Toaster />
      <Footer />
    </>
  );
}

export default App;
