import Nav from "./components/Nav";
import "./App.css";
import Welcome from "./components/Welcome"
import Home from "./components/Home";
import About from "./components/About"
import Social from "./components/Social";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Home/>
        <About/>
        <Education/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Social/>
       
      </div>
    </>
  );
}
{
  /* <div   style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', 
      backgroundAttachment:'scroll',
      backgroundPosition: 'center', 
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div> */
}

export default App;
