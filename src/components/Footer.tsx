import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";
import footerLogo from "../assets/logo-text.png";

export const Footer = () => {
  return (
    <div>
      <footer className="max-w-[1600px] mx-auto mt-10 px-6 py-8 text-[#64748B]">
        <div className="grid grid-cols-3 gap-6 lg:flex lg:justify-between lg:gap-10 lg:text-left">
          
          {/* Logo & Social */}
          <aside className="col-span-3 flex flex-col items-center text-center lg:items-start lg:text-left">
            <img src={footerLogo} alt="Dev Stack" />

            <p className="text-base sm:text-xl mt-5">
              Curated tools, technologies, and resources for developers building
              <br className="hidden lg:block" />
              modern software.
            </p>

            <div className="mt-7 flex gap-4">
              <a>
                <FaGithub className="w-10 h-10 bg-[#DB2777] p-2 rounded-full text-white" />
              </a>

              <a>
                <FaYoutube className="w-10 h-10 bg-[#DB2777] p-2 rounded-full text-white" />
              </a>

              <a>
                <FaFacebookF className="w-10 h-10 bg-[#DB2777] p-2 rounded-full text-white" />
              </a>
            </div>
          </aside>

          {/* Product */}
          <nav className="flex flex-col items-center text-[15px] lg:items-start">
            <h6 className="footer-title">Product</h6>

            <a className="link link-hover">Home</a>
            <a className="link link-hover">Technologies</a>
            <a className="link link-hover">Projects</a>
            <a className="link link-hover">Your Stack</a>
          </nav>

          {/* Company */}
          <nav className="flex flex-col items-center text-[15px] lg:items-start">
            <h6 className="footer-title">Company</h6>

            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Blog</a>
          </nav>

          {/* Legal */}
          <nav className="flex flex-col items-center text-[15px] lg:items-start">
            <h6 className="footer-title">Legal</h6>

            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Licenses</a>
          </nav>

          {/* Build Your Stack Button */}
          <div className="col-span-3 flex justify-center lg:hidden">
            <button
              onClick={() =>
                document.getElementById("technologies")?.scrollIntoView()
              }
              className="btn bg-[#DB2777] text-white border-none rounded-xl px-6 py-5 text-base"
            >
              Build Your Stack →
            </button>
          </div>
        </div>
      </footer>


      {/* Bottom Footer */}
      <footer className="container mx-auto flex flex-col items-center gap-4 pb-7 text-center text-sm text-[#94A3B8] sm:flex-row sm:justify-between sm:px-7 sm:text-base">
        <p>© {new Date().getFullYear()} - Dev Stack | All rights reserved.</p>

        <div className="flex gap-4">
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Terms</a>
        </div>
      </footer>
    </div>
  );
};
