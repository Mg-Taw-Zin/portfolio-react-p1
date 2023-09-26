import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default App;
