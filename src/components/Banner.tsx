import BannerImg from "../assets/banner-stack.png";

export const Banner = () => {
  return (
    <section className="min-h-100 my-20 flex justify-between container mx-auto">
      <div>
        <h1 className="font-bold text-7xl">
          <span> Build Your Ideal</span>
          <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        
        </h1>
        <p className="py-10 text-2xl text-[#64748B]">
          Explore frontend, backend, database, and tooling options, <br />
          compare them side by side, and put together the stack that fits your{" "}
          <br />
          next project.
        </p>

        <br />

        <div className="flex gap-5">
          <button className="btn px-3 bg-linear-to-r from-[#FF5722] to-[#D81B7E] text-white rounded-lg text-[17px] py-6">Explore Technologies</button>

          <button className="btn btn-outline-gray bg-white border-slate-200 px-10 py-6 text-[#64748B] text-[17px] rounded-lg">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
    </section>
  );
};
