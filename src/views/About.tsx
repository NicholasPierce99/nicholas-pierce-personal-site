// assets
import aboutPageImg from "../assets/second-page-test.png";
import aboutIllustration from "../assets/fade-in-second-enlarge-test.png";
import githubIcon from "../assets/github-mark-white.png";
import linkedinIcon from "../assets/LI-In-Bug.png";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

function onClickSocialMediaLink(platform: string, username: string): void {
  const baseUrl = getSocialMediaBaseUrl(platform);
  const url = `${baseUrl}/${username}`;
  socialMediaOnClick(url);
}

function socialMediaOnClick(url: string): void{
  window.open(url, '_blank');
}

function getSocialMediaBaseUrl(platform: string): string {
  // Add logic to determine the base URL for each social media platform
  // For example, you can use a switch statement or an object mapping.
  switch (platform) {
    case 'github':
      return 'https://www.github.com';
    case 'linkedin':
      return 'https://linkedin.com';
    // Add more cases for other social media platforms as needed
    default:
      return ''; // Default to an empty string or handle unsupported platforms accordingly
  }
}

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            Certified AWS senior engineer at Eli Lilly and Company working on automating laboratory workflows via cloud native applications and managing k8's infrastructure.
            AWS serverless/containers and web dev consultant.Previously worked on biophysics visualizations and data science as a service products, 
            api development, serverless web applications, AI/ML pipelines, and a multitude of things in between.
            For any inquiries, please reach out :).

            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon imgSrc={githubIcon} title="Github" onClick={() => onClickSocialMediaLink('github', 'NicholasPierce99')} />
            <SocialMediaIcon imgSrc={linkedinIcon} title="Linkedin" onClick={() => onClickSocialMediaLink('linkedin', 'in/nicholas-pierce99')} />
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[750px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;