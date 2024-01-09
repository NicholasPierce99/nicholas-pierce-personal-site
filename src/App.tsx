// views
import { About, Contact, Hero, Projects } from "./views";

// components
import { Menu } from "./components";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Projects />
      {/* 
      <Contact />
      */}
    </>
  );
}

export default App;
