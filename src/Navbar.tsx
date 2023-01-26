import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
      <nav className="w-9/12 mx-auto my-4 h-12 bg-neutral-50 border border-neutral-300 shadow-xl">
        <ul className="flex justify-around items-center h-full underline text-sky-700">
          <li> <Link to={"/"}>About</Link> </li>
          <li> <Link to={"/blog"}>Blog</Link> </li>
          <li> <Link to={"/contact"}>Contact</Link> </li>
        </ul>
      </nav>
    )
}