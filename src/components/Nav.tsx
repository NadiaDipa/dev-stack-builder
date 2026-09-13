import Logo from "../assets/logo-text.png";

export const Nav = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <nav className="max-w-[1600px] mx-auto flex items-center justify-between px-4 py-4 max-w-7xl xl:py-5">

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
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>

            <hr />

            <li><a href="">Sign In</a></li>

            <li>
              <a className="rounded-full bg-[#DB2777] text-white w-fit mb-4 lg:mb-0 lg:ml-0 ml-2">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-7 text-xl font-semibold">
            <li className="text-[#DB2777]">
              <a href="">Home</a>
            </li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>

          <div className="flex items-center gap-7 text-xl">
            <button>Sign In</button>

            <button className="rounded-full bg-[#DB2777] px-4 py-2 text-white">
              Sign Up
            </button>
          </div>
        </div>

      </nav>
    </header>
  );
};