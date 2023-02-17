import { AnimatedTyping } from "./AnimatedTyping"
import { Link } from "react-router-dom"

export const About = () => {
    return(
      <div id="wrapper" className="h-full w-9/12 mx-auto mt-20 mb-10 p-4 bg-neutral-100 shadow-2xl rounded-md ">
        <div id="box" className="text-2xl text-neutral-100 bg-sky-700 border border-sky-800 w-6/12 h-1/4 mx-auto mt-16 rounded-2xl shadow-2xl flex items-center justify-center">
          <AnimatedTyping />
        </div>

        <div id="box" className="opacity-70 text-sky-700 bg-neutral-50 border-4 border-sky-800  w-3/12 h-12 mx-auto mt-6 rounded-2xl shadow-2xl flex items-center justify-center"
        >
          <Link to='/blog' className="w-max h-max">read the blog</Link>
        </div>

      </div>
    )
}