export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Farmcare",
    description:
      "The webapp serves as a complete solution to crop disease detection and prevention as it leverages advanced ML models and also provides IOT device based plant monitoring system.",
    technologies: ["MERN", "IOT", "Tensorflow"],
    github: "https://github.com/Ratnesh-Rajput/hackbyte_FarmCare",
    demo: "farmcare.netlify.app/",
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  {
    id: 1,
    name: "AIXcessibility",
    description:
      "making the digital world more inclusive and accessible to everyone.",
    technologies: ["MERN", "Python", "Docker"],
    github: "https://github.com/Ratnesh-Rajput/AIXcessibility",
    demo: "aixcessibility.netlify.app",
    image: require(".//../../public/projects/propellent-new.png"),
    available: true,
  },
  {
    id: 2,
    name: "Flixify",
    description:
      "With cutting-edge AR technology, AbleEd a enhanced learning management system aims to engage students in a way that traditional methods cannot.",
    technologies: ["MERN", "Shell", "Prisma"],
    github: "https://github.com/Ratnesh-Rajput/Able-Ed",
    demo: "able-ed-v2.vercel.app",
    image: require(".//../../public/projects/flixify.png"),
    available: true,
  },
  {
    id: 3,
    name: "Shoestopper",
    description:
      "A visually stunning UI mock-up of a Footwear retail website using React & Tailwind to showcase product displays, seamless navigation, and engaging user interactions.",
    technologies: ["React", "CSS", "Tailwind"],
    github: "https://github.com/Ratnesh-Rajput/Shoestopper",
    demo: "shoestopper7.netlify.app/",
    image: require(".//../../public/projects/skywatch-new.webp"),
    available: true,
  },
 
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

