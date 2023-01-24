import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar"
import { About, AllBlogs, SingleBlog } from "./Pages"

function App() {

  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="blog" element={<AllBlogs />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
      </Routes>
    </Router>
  )
}

export default App
