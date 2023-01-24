import { AnimatedTyping } from "./About/AnimatedTyping"
import { getBlogs } from "../ContentfulUtils/apiClient"

export const About = () => {
    getBlogs()
    return(
      <div id="wrapper" className="h-4/5 w-9/12 mx-auto p-4 bg-gray-200 border border-gray-300">
        {/* <h1 className="text-xl font-light">Welcome!</h1> */}
        {/* <AnimatedTyping /> */}
      </div>
    )
}