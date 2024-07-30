"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./projectCard";

const projectData = [
  {
    title: "Andranoviax - Personal Portfolio",
    description: "Website | Branding",
    imgSrc: "/assets/projects/andranoviax.png",
    width: 608,
    height: 399,
    link: "",
  },
  {
    title: "Bukwush - Discover Book Series",
    description: "Mobile app | UI - UX",
    imgSrc: "/assets/projects/aldo.png",
    width: 589,
    height: 381,
    link: "",
  },
  {
    title: "Project 2",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 508,
    height: 381,
    link: "",
  },
  {
    title: "Project 3",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 608,
    height: 399,
    link: "",
  },
  {
    title: "Project 4",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 608,
    height: 399,
    link: "",
  },
  {
    title: "Project 5",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 508,
    height: 381,
    link: "",
  },
];

const ProjectsList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 px-[9rem] py-10 mb-[19rem]">
      {projectData.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </div>
  );
};
// const ProjectsList: React.FC = () => (
//   <div className="grid grid-cols-2 gap-8 px-[9rem] py-10 mb-[19rem]">
//     {projectData.map((project, index) => (
//       <motion.div
//         key={index}
//         // initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         // viewport={{ once: false, amount: 0.4 }}
//         transition={{ duration: 0.6, delay: index * 0.1 }}
//         // style={{ willChange: "transform, opacity" }}
//       >
//         <ProjectCard {...project} index={index} />
//       </motion.div>
//     ))}
//   </div>
// );


export default ProjectsList;
