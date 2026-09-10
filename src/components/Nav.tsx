import Logo from "../assets/logo-text.png";

export const Nav = () => {
  return (
    <nav className="flex justify-between container mx-auto py-6 sticky top-0 z-50 w-full bg-white">
      <img src={Logo} alt="logo-img" />

      <ul className="flex gap-7 items-center text-xl font-semibold">
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
      <div className="flex gap-7 text-xl">
        <button>Sign In</button>
        <button className="btn bg-[#DB2777] text-white text-xl rounded-3xl ">Sign Up</button>
      </div>
    </nav>
  );
};
