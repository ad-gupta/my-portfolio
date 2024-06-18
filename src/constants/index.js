import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiSocketdotio,
  SiGit,
  SiBootstrap,
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiFigma,
  SiUbuntu,
} from "react-icons/si";
import { FaNode, FaJava } from "react-icons/fa";
import { GiMongolia } from "react-icons/gi";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  drisha_software_private_limited_logo,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  youTube,
  tripguide,
  smart,
  techzee,
  food,
  threejs,
  jewel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive programmer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: AiFillHtml5,
  },
  {
    name: "CSS",
    icon: DiCss3,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React JS",
    icon: SiReact,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node JS",
    icon: FaNode,
  },
  {
    name: "Express JS",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Next JS",
    icon: SiNextdotjs,
  },
  {
    name: "SQL",
    icon: SiMysql,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "C++",
    icon: SiCplusplus,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Web Sockets",
    icon: SiSocketdotio,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
  },
];
const toolsUsed = [
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "MongoDB Atlas",
    icon: GiMongolia,
  },
  {
    name: "Netlify",
    icon: SiNetlify,
  },
  {
    name: "Vercel",
    icon: SiVercel,
  },
  {
    name: "Github",
    icon: SiGithub,
  },
  {
    name: "Figma",
    icon: SiFigma,
  },
  {
    name: "Ubuntu",
    icon: SiUbuntu,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Drisha Software pvt. ltd.",
    icon: drisha_software_private_limited_logo,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, and Firebase.",
      "Implemented Subscription model using razorpay for the company's website lead-vendor.com",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Smart Tutor",
    description:
      "This project solves a real life problem of a student and a tutor, where a tutor post and manages his course and a student view the course with rating and review of others along with a demo video. The platform offers courses ranging from primary level to post-graduate level. It also has a section of previous year paper, which can be purchased with very low cost. Once the course is purchased the tutor will get contacted and classes run on this platform itself using stream.io. The app is very interactive and fully responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "stream.io",
        color: "pink-text-gradient",
      },
    ],
    image: smart,
    source_code_link: "https://github.com/ad-gupta/tutorial",
    live_code_link: "https://smart-tutor-bu5k.onrender.com/",
  },
  {
    name: "Video Sharing",
    description:
    "Inspired by YouTube, this video-sharing app allows users to watch, upload, comment, and like videos. Built with technologies like React, Node, Express, and MongoDB, it ensures a smooth and responsive user experience. The app is fully interactive, offering all essential features for engaging with content. Its responsive design guarantees optimal performance across devices, making it accessible anytime, anywhere. Whether you're a content creator or a viewer, this app provides a robust platform to share and enjoy videos effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
    ],
    image: youTube,
    source_code_link: "https://github.com/ad-gupta/youtube-client",
    live_code_link: "https://github.com/ad-gupta/youtube-server"
  },
  {
    name: "Food Delivery Redirecting",
    description:
      "The Food Delivery App offers a seamless experience by featuring meals categorized by time: breakfast, lunch, dinner, evening snacks, and fast food. Users can easily navigate through these categories to find their desired meals. Additionally, the app provides various platforms where users can compare prices, ensuring they get the best deal. This functionality not only enhances convenience but also promotes cost-effective choices, making it a go-to app for all meal needs throughout the day.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/ad-gupta/food-delivery-client",
    live_code_link: "https://github.com/ad-gupta/food-delivery",
  },
];

export {
  services,
  toolsUsed,
  technologies,
  experiences,
  testimonials,
  projects,
};
