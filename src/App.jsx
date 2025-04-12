import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Skill from "./components/pages/Skill";

function App() {
  return (
    <>
      <div className="background-animation">
        <BrowserRouter>
          <div className="w-screen mx-auto container relative z-10">
            <div className="w-full h-screen mx-auto container">
              <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/skills" element={<Skill />}></Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;