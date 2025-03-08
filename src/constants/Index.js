import Project1 from "../assets/EthanMizunoProject1.jpg"
import Project2 from "../assets/EthanMizunoProject2.jpg"
import Project3 from "../assets/EthanMizunoProject3.jpg"

export const HERO_CONTENT = `Come check out my personal portfolio!`

export const ABOUT_TEXT = `My name is Ethan Mizuno. I am 23 years old and grew up in Kingwood, TX. I am an aspiring medical professional and recent Bioengineering and Data Science
 graduate from the University of Washington. During my time at UW, I gained many technical skills and lab experience
 through my classwork and my time at the Predictive Sys-Bio Lab. By working with Professor Sauro's team, I gained valuable knowledge
 in software testing and development by working with SBML and Tellurium. Additionally, I was fortunate enough to volunteer
 at Swedish Medical Center under the Cope Health Scholars program where I gained first hand experience in patient care
 while working with other medical professionals. As I look forward, I am taking a gap year before applying to medical school
 and seeking enriching opportunities to gain additional hands-on experience in healthcare settings, further solidifying my
 commitment to a career in medicine while applying my unique skill set to improve patient care and medical
 research.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Full Stack Mobile App Developer",
    company: "UW Medicine",
    description: `Crafting an innovative application designed to empower attending anesthesiologists with the capability
                   to remotely access and visualize anesthesia monitoring data from multiple operating rooms in real-time.`,
    technologies: ["Javascript", "React.js", "Python", "Expo Go", "HTML", "CSS", "Firebase"],
  },
  {
    year: "June 2023 - June 2024",
    role: "Undergraduate Research Assistant",
    company: "Predictive Sys-Bio Lab",
    description: `Designed and developed a comprehensive test suite to validate the reproducibility of SBMLDiagrams,
                  ensuring the software's robust performance in biological modeling and simulation`,
    technologies: ["Python", "Tellurium", "SBMLDiagrams", "Copasi"]
  },
];

export const PROJECTS = [
  {
    title: "Capstone Project: Remote Monitoring of Anesthesia Equipment",
    image: Project1,
    description: "This advanced tool facilitates swift communication within the anesthesiology team enhancing collaboration and significantly improving clinical outcomes.",
    technologies: ["Javascript", "React.js", "Python", "Expo Go", "HTML", "CSS", "Firebase"],
    link: "/projects/uwmedicine",
  },
  {
    title: "Does Clutch Actually Exist in Baseball?",
    image: Project2,
    description: "This project aims to analyze the concept of “Clutch Performance” within Major League Baseball, focusing exclusively on batting. We define clutch as an athlete's change in win probability under pressure in game-critical moments. By dissecting these high-pressure situations, our project aims to unveil whether clutch performance is a myth or a reality, backed by statistical evidence.",
    technologies: ["Python"],
    link: "/projects/baseballclutch",
  },
  {
    title: "Anthropogenic Climate Change and its Impacts",
    image: Project3,
    description: "This project is centered around understanding the impacts of human-induced climate change, using indicators spanning across multiple fields to recognize the unique global effects that rising temperatures caused by greenhouse gas emissions (GHGs) have on the global environment.",
    technologies: ["Javascript"],
  },
];

export const CONTACT = {
  address: "18 Oak Cove Lane, Humble, Texas 77346 ",
  phoneNo: "+1 713 855 1095 ",
  email: "ethanmizuno16@gmail.com",
};