import Logo from "../assets/logo-text.png";

export const Nav = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <nav className="max-w-[1600px] mx-auto flex items-center justify-between px-4 py-4 xl:py-5">
        <a href="">
          <img src={Logo} alt="Dev Stack" />
        </a>

        {/* Hamburger */}
        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} className="btn btn-square btn-ghost">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow text-lg"
          >
            <li className="text-[#DB2777]">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>

            <hr />

            <li>
              <a href="">Sign In</a>
            </li>

            <li>
              <a className="btn btn-sm rounded-full bg-[#DB2777] border-none text-white w-fit mb-4 lg:mb-0 lg:ml-0 ml-2">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop */}

        <div className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex items-center gap-7 text-xl font-semibold">
            <li className="text-[#DB2777]">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7 text-xl">
          <button className="btn btn-ghost text-xl">Sign In</button>

          <button className="btn rounded-full bg-[#DB2777] hover:bg-[#c21f6a] border-none text-white text-xl">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};
