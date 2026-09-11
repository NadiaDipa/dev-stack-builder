export const SingleCard = () => {
  return (
    <section>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <div className="w-16 h-16">
              <img
                src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
                alt=""
              />
            </div>
            <span className="badge badge-ls text-[#0EA5E9] bg-[#E0F2FE] rounded-xl font-semibold">
              Popular
            </span>
          </div>

          <div className="">
            <h2 className="text-2xl font-bold py-5">React</h2>
            <p className="text-[#64748B] text-xl pb-5">
              A declarative, component-based JavaScript library for building
              modern user interfaces.
            </p>
          </div>

          <div className="flex justify-between">
            <span className="badge badge-ls text-[#475569] bg-[#F1F5F9] rounded font-semibold">
              Frontend
            </span>

            <span className="badge badge-ls text-[#64748B] font-semibold">
              Beginner-Friendly
            </span>
            <div className="flex items-center gap-2">
              <span className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                  aria-label="1 star"
                />
              </span>
              <span className="font-bold text-[#334155]">4.9</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-[#0A0F1D] text-[#FFFFFF] rounded-xl btn btn-block h-12">
              Add to Stack
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
