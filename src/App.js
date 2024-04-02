import { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import OffcanvasExample from "./components/Header/Header";
import Team from "./components/Team/Team";
import WeAre from "./components/WeAre/WeAre";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>{" "}
      <div data-aos="fade-down">
        <Routes>
          <Route path="/Team" element={<Team></Team>} />
          <Route path="/Contact" element={<Contact></Contact>} />
          <Route path="/we-are" element={<WeAre></WeAre>} />
          {/*  */}
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
