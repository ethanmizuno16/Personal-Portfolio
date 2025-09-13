import Project1 from "../assets/EthanMizunoProject1.jpg"
import Project2 from "../assets/EthanMizunoProject2.jpg"
import Project3 from "../assets/EthanMizunoProject3.jpg"
import uwLogo from "../assets/Washington.png"

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
    year: "Jan 2024 - Jan 2025",
    role: "Full Stack Mobile App Developer",
    company: "UW Medicine",
    description: `Developed a cutting-edge mobile application that enhances real-time communication and decision-making for anesthesiologists by providing remote access to live anesthesia monitoring data across multiple operating rooms. Leveraging React Native, Firebase, and Python, the app streamlines intraoperative workflows, improving care team coordination and response efficiency. Collaborating closely with anesthesiology staff and hospital stakeholders, I am focused on optimizing data visualization, system performance, and seamless hospital integration to drive measurable improvements in clinical outcomes.`,
    technologies: ["Javascript", "React.js", "Python", "Expo Go", "HTML", "CSS", "Firebase"],
  },
  {
    year: "June 2023 - June 2024",
    role: "Undergraduate Research Assistant",
    company: "Predictive Sys-Bio Lab",
    description: `Designed and developed a robust testing framework to ensure the accuracy and reproducibility of SBMLDiagrams in biological modeling and simulation. By leveraging Python and the SBMLDiagrams API, improved software reliability through comprehensive debugging and performance optimization. Increased cross-platform compatibility by 20%, enabling seamless integration with tools like Copasi and enhancing the overall user experience for computational biologists.`,
    technologies: ["Python", "Tellurium", "SBMLDiagrams", "Copasi"]
  },
];

export const EDUCATION = [
  {
    year: "2020 - 2024",
    degree: "Bachelor of Science in Bioengineering",
    school: "University of Washington",
    logo: uwLogo,
    gpa: "3.70",
    description: `Earned a Bachelor of Science in Bioengineering with a concentration in Data Science. 
    Coursework covered core engineering principles, computer science, and pre-medical studies. 
    Member of Phi Delta Theta WA Alpha Chapter, serving as the Executive Board Fundraising Chair (2022-2023)`
  },
];

export const PROJECTS = [
  {
    title: "Capstone Project: Remote Monitoring of Anesthesia Equipment",
    image: Project1,
    description: "This mobile application enhances real-time communication within the anesthesiology team, improving coordination and clinical efficiency in surgical settings. By providing live updates on patient vitals, procedure progress, and urgent notifications, the app streamlines decision-making and ensures rapid response to critical events.",
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
    link: "/projects/climate",
  },
];

export const CONTACT = {
  address: "18 Oak Cove Lane, Humble, Texas 77346 ",
  phoneNo: "+1 713 855 1095 ",
  email: "ethanmizuno16@gmail.com",
};