import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./App.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portofolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
