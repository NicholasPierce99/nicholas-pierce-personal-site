// assets
import homePageImg from "../assets/background-greyscale.png";
import homePageIllustation from "../assets/me-grey.png";
import downloadIcon from "../assets/download-btn-icon.svg";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const MainPage = () => {
  return <div id="home"
  className="min-h-screen flex items-center justify-center relative"
  style = {{
    background: `url(${homePageImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
  >
    <div 
    className="max-w-screen 2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12"
    >
      <div className="w-full xl:w-fit">
        <h1
          className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bolt text-textPrimary uppercase">
            Nicholas Pierce M.S.
            <br />
            <span className="text-secondary">
              <Typewriter 
                words = {["Freelance", "Consulting", "Web Dev", "AWS", "Kubernetes"]} 
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
          </h1>
          <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button secondary>Hire me pls</Button>
            <Button icon={downloadIcon}>Download Resume </Button>
          </div>
      </div>

      <img 
        src={homePageIllustation}
        alt=""
        className="max-w-full sm:max-w-[401px]"
      />
    </div>
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
  </div>
};

export default MainPage;
