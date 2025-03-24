import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
function App() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <div ref={scrollRef}
          className="w-screen mx-auto container">
          <div className="w-full h-screen mx-auto container">
            <Routes>
              <Route path="/" element={<Header />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;