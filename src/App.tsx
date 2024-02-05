// views
import { About, Contact, MainPage, Projects } from "./views";

// components
import { Menu } from "./components";

function App() {
  return (
    <>
      < MainPage/>
      <About />
      <Menu />
      <Projects />
      {
      <Contact />
      }
    </>
  );
}

export default App;
