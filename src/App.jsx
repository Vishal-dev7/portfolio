import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Skills from "./comps/skills"
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Tools from "./comps/tools";
function App() {
  

  return (
    <div>
  <div className="bg-[url(./img/paper-bg.jpg)]">
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home  class="bg-[url(./img/paper-bg.jpg)]"/>}/>
    <Route path="#about" element={<About />}/> 
    <Route path="#contact" element={<Contact />}/>   
  </Routes>
  </BrowserRouter> </div>
  <About id="about"/> 
   <Skills />
  <Tools />
  <Contact id="contact"/>
   </div>
  );
}

export default App
