import { AnimatedTyping } from "./AnimatedTyping"
import { Link } from "react-router-dom"

export const About = () => {
    return(
      <div id="wrapper" className="h-full w-9/12 mx-auto mt-20 mb-10 p-4 bg-neutral-100 shadow-2xl rounded-md flex flex-col justify-center items-center">
        <div id="box" className="text-2xl text-neutral-100 bg-sky-700 w-6/12 h-1/4 mx-auto rounded-2xl shadow-2xl flex items-center justify-center">
          <AnimatedTyping />
        </div>

        <div id="poem" className="text-sm lg:text-lg md:text-base sm:text-sm opacity-60 font-medium">
          <p className=" mt-10 text-center">"A senior in college,<br />With a curious mind and heart,<br />Building a bright future."</p>
          <p className="mt-4 text-right">-ChatGPT</p>
        </div>


      </div>
    )
}