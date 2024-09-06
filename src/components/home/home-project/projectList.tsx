"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./projectCard";
import projectData from "@/components/data/project-data";

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ProjectsList: React.FC = () => {
  
  const shuffledProjects = shuffleArray([...projectData]);

  const leftColumn: any[] = [];
  const rightColumn: any[] = [];

  const projects608 = shuffledProjects.filter(project => project.width === 608);
  const projects508 = shuffledProjects.filter(project => project.width === 508);

  
  for (let i = 0; i < 3; i++) {
    if (projects608[i]) {
      leftColumn.push(projects608[i]); 
    }
    if (projects508[i]) {
      rightColumn.push(projects508[i]); 
    }
    if (projects508[i + 3]) {
      leftColumn.push(projects508[i + 3]); 
    }
    if (projects608[i + 3]) {
      rightColumn.push(projects608[i + 3]); 
    }
  }

  
  const displayedProjects = leftColumn.map((project, index) => {
    return [project, rightColumn[index]];
  }).flat().slice(0, 6);


  return (
    <div className="relative">
    <div className="px-[9rem] py-10 mb-[19rem] grid grid-cols-2 gap-8">
    
      {displayedProjects.map((project, index) => {
        const isLeft = index % 2 === 0;
        const size = isLeft ? (index % 4 === 0 ? 608 : 508) : (index % 4 === 1 ? 508 : 608);
        const modifiedProject = {
          ...project,
          width: size,
          height: 399, 
        };
        return (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard {...modifiedProject} index={index} />
          </motion.div>
        );
      })}
    </div>
    </div>
  );
};
export default ProjectsList;
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