import biometrics1 from './assets/biometrics1.png'
import datascience1 from './assets/wordcloud.png'
import multimedia from './assets/convolution.png'
import covidData from './assets/covid-big-data.png'
import softwareEngineering from './assets/se.png'
import pf from './assets/project-falcon.png'
interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "university",
    img: covidData,
    title: "Covid Big Data Analytics",
    link: "https://github.com/NicholasPierce99/University-Innit/tree/main/Big%20Data%20Management"
  },
  {
    id: 1,
    category: "university",
    img: biometrics1,
    title: "Biometrics Feature Scanning and Analysis",
    link: "https://github.com/NicholasPierce99/University-Innit/tree/main/Biometrics"
  },
  {
    id: 2,
    category: "university",
    img: multimedia,
    title: "Multimedia Algorithm Implementations",
    link: "https://github.com/NicholasPierce99/University-Innit/tree/main/Multimedia"
  },
  {
    id: 3,
    category: "university",
    img: datascience1,
    title: "Reddit Vaccine Dataset Analysis",
    link: "https://github.com/NicholasPierce99/University-Innit/blob/main/Data%20Science/data%20science%20blog%20reddit%20vaccines/analysis.r"
  },
  {
    id: 4,
    category: "university",
    img: softwareEngineering,
    title: "Software Engineering Object Oriented Patterns",
    link: "https://github.com/NicholasPierce99/University-Innit/tree/main/Software%20Engineering"
  },
  {
    id: 5,
    category: "app",
    img: pf,
    title: "Metabolomics Sample Management",
    link: ""
  },
  {
    id: 6,
    category: "app",
    img: pf,
    title: "Metabolomics Quality Control",
    link: ""
  },
  {
    id: 7,
    category: "app",
    img: pf,
    title: "Metabolomics Metadata Management",
    link: ""
  },
];