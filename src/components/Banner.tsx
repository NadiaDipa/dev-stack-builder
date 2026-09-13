import BannerImg from "../assets/banner-stack.png";

export const Banner = () => {
  return (
    <section className="max-w-[1600px] mx-auto flex flex-col gap-10 px-4 pt-24 md:flex-row md:items-center md:justify-between md:pt-20 xl:pt-24  max-w-7xl">

      <div className="md:w-1/2">
        <h1 className="text-center text-3xl font-bold text-[#0F172A] md:text-left md:text-4xl lg:text-6xl md:mt-10">
          <span className="md:text-[42px] xl:text-7xl">
            Build Your Ideal
          </span>
          <br />
          <span className="whitespace-nowrap bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent md:text-4xl lg:text-7xl">
            Development Stack
          </span>
        </h1>

        <p className="py-8 text-center text-base text-[#64748B] md:text-left md:text-xl lg:py-10 lg:text-2xl">
          Explore frontend, backend, database, and tooling options,
          <br className="hidden xl:block" />
          compare them side by side, and put together the stack that fits your
        
          next project.
        </p>

        <div className="flex justify-center gap-4 md:justify-start md:mb-25">
          <button className="btn w-fit rounded-lg bg-linear-to-r from-[#FF5722] to-[#D81B7E] text-[15px] text-white md:text-base lg:px-3 lg:py-6 ">
            Explore Technologies
          </button>

          <button className="btn w-fit rounded-lg border-slate-200 bg-white text-[15px] text-[#64748B] md:text-base lg:px-10 lg:py-6 ">
            Learn More
          </button>
        </div>
      </div>


      <div className="flex justify-center md:w-1/2">
        <img
          src={BannerImg}
          alt=""
          className="w-full max-w-md"
        />
      </div>

    </section>
  );
};