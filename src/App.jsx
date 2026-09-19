import { BrowserRouter, Routes, Route } 
from "react-router-dom";



import Index from "./pages/index";
import About from "./pages/About";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Course from "./pages/course";

function App() {
  return (
    <BrowserRouter>
    
    

    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/course" element={<Course/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
