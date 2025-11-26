import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Education from "./pages/Education"
import Contacts from "./pages/Contacts"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App