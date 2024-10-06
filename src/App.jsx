import Hero from "./components/Hero.jsx";
import About from "./components/About";
import Navbar from "./components/Navbar.jsx";
import Objective from "./components/Objective.jsx";
import Services from "./components/Services.jsx";
import Location from "./components/Location.jsx";
import Contact from "./components/Contact.jsx";


const App = () => {
  return (
    <div className =" overflow-x-hidden text-black antialiased selection:bg-cyan-300 selection:text-cyan-900">  
    <div className="fixed top-0 -z-10 h-full w-full ">
    <div className="relative h-full w-full bg-white"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div> 
    </div>
    <Navbar/>
    <Hero/>
    <div className="container mx-auto px-8"> 
    <About/>
    <Objective/>
    </div>
    <Services/>
    <div className="container mx-auto px-8"> 
    <Location/>
    </div>
    <Contact/>
    </div>
  
  );
};

export default App;