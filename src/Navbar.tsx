import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
      <nav className="flex justify-end w-full h-12 bg-neutral-100 border border-neutral-300 shadow-xl absolute">
        <div className="flex w-full lg:w-5/12 md:w-2/3 sm:w-full  justify-center items-center h-full">

          <ul className="text-sm flex w-full justify-around items-center h-full text-neutral-700 ">
            <li className="hover:text-sky-700"> <Link to={"/blog"}>BLOG</Link> </li>
            <li className="hover:text-sky-700"> <Link to={"/projects"}>PROJECTS</Link></li>
            <li className="hover:text-sky-700"> <Link to={"/contact"}>CONTACT</Link> </li>
            <li className="hover:text-sky-700"> <a href="https://drive.google.com/file/d/1NRFoSewUqqBEaA7HV-_4AyrDxzTzO19i/view?usp=sharing">RESUME</a></li>
          </ul>

          <div id="logo-wrapper" className="flex justify-center w-1/4">
            <Link to={"/"}>
              <div id="logo" className="w-10 h-10 flex justify-center items-center border-2 border-sky-700 rounded-full">
                <span className="text-xl font-bold mb-1 underline">jd</span> 
              </div>
            </Link>
          </div>

        </div>
      </nav>
    )
  }