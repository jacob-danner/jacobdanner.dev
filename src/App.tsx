import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar"
import { About, AllBlogs, ContactPage, ProjectsPage, SingleBlog, SingleProject } from "./Pages"

function App() {

  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="blog" element={<AllBlogs />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<SingleProject />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
