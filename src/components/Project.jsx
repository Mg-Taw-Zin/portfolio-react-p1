import projectsData from "../data/projects.json";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

const projects = [project1, project2, project3, project4, project5];

const Project = () => {
  return (
    <div id="project" className=" my-10 px-12">
      <h1 className="  text-center text-3xl mb-14 font-semibold uppercase">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-14">
        {projectsData.map((Project, i) => {
          return (
            <div
              key={Project.id}
              className="flex justify-center rounded-md relative bg-black  group"
            >
              <h2 className=" text-sm absolute top-[-30px]">{Project.name}</h2>
              <img
                src={projects[i]}
                alt={Project.name}
                width={300}
                className=" group-hover:opacity-40 transition-opacity object-cover"
              />
              <div className=" absolute bottom-2 flex gap-x-3 underline text-white  opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={Project.github} target="_blank" title="github">
                  Github
                </a>
                <a href={Project.netlify} target="_blank" title="netify">
                  website
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <p className="   text-center my-3 text-lg">
        These are my example projects and if you went to see all of my
        projects&nbsp;
        <a
          href="https://app.netlify.com/teams/alex-shaniz/overview"
          className=" font-bold hover:underline"
          target="_blank"
        >
          tap here
        </a>
      </p>
    </div>
  );
};

export default Project;
