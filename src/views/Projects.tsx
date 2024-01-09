// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-background-dimmed.png";

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "app" | "infra" | "ds" | "university";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("university");

  const filteredProjects = () => {
    if (activeCategory === "university") {
      return projects.filter((item) => item.category === "university");
    } else if(activeCategory === "app") {
      return projects.filter((item) => item.category === "app");
    }
    else if(activeCategory === "infra") {
      return projects.filter((item) => item.category === "infra")
    }
    else {
      return projects.filter((item) => item.category === "ds")
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              My recent <span className="text-secondary"> projects</span>
            </h2>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            <Button
              secondary={activeCategory === "university" ? true : false}
              onClick={() => setActiveCategory("university")}
            >
              Graduate School
            </Button>
            <Button
              secondary={activeCategory === "app" ? true : false}
              onClick={() => setActiveCategory("app")}
            >
              Application Development
            </Button>
            <Button
              secondary={activeCategory === "infra" ? true : false}
              onClick={() => setActiveCategory("infra")}
            >
              Infrastructure
            </Button>
            <Button
              secondary={activeCategory === "ds" ? true : false}
              onClick={() => setActiveCategory("ds")}
            >
              Data Science
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex gap-12 mt-12 flex-wrap justify-center"
          >
            {filteredProjects().map((item) => (
              <Card imgSrc={item.img} title={item.title} refLink={item.link}/>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;