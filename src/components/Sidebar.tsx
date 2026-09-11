import { useState } from "react"

export const Sidebar = () => {
  return (                   
    <section className="h-full mt-auto">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body ">
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
    </section>

   
  );
};
