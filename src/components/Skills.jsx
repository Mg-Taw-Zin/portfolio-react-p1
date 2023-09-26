import data from "../data/skills.json";
import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import Javascript from "../assets/skills/javascript.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import Tailwind from "../assets/skills/tailwind.png";
import ReactJS from "../assets/skills/react.png";
import Figma from "../assets/skills/figma.png";

const Skills = () => {
  const images = [HTML, CSS, Javascript, Bootstrap, Tailwind, ReactJS, Figma];
  return (
    <div id="skill" className=" my-12 px-12 sm:px-0">
      {/*Text for skills*/}
      <div className="flex flex-col gap-y-2 mb-5 md:items-center">
        <h1 className=" text-2xl font-semibold uppercase">Skills</h1>
        <p className=" text-xl text-gray-600">What I know best</p>
      </div>
      {/*Skill sets*/}
      <div className="flex flex-wrap justify-between gap-5 md:justify-center">
        {data.map((tech, i) => {
          return (
            <div
              key={tech.id}
              className=" bg-indigo-300 min-w-[200px]  aspect-square flex flex-col justify-center items-center gap-y-3 rounded-md shadow-sm hover:shadow-md sm:w-[300px]  transition-shadow"
            >
              <img src={images[i]} alt={tech.name} width={60} />
              <h3 className="text-[14px] tracking-wider">{tech.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
