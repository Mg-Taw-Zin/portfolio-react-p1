import myPic from "../assets/myPic.jpg";
import CV from "../assets/nick-cv.pdf";
import { FiFileText } from "react-icons/fi";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-around gap-x-5 py-20  md:flex-col md:items-center md:gap-y-10"
    >
      {/*Designer Image*/}
      <img
        src={myPic}
        alt="Designer"
        className="w-[300px] rounded-md sm:w-[270px]"
      />
      {/*About me*/}
      <div
        className="w-1/2 flex flex-col justify-between md:gap-y-8 md:w-full md:px-7 sm:px-5
      "
      >
        <div>
          <h2 className=" text-2xl font-bold uppercase mb-3">
            I'm frontend developer
          </h2>
          <p className=" first-letter:ml-2">
            Hi, I'm <span className=" font-bold">Alex Shaniz</span>, a front-end
            developer with a passion for building user-friendly and visually
            appealing web applications. I have a deep understanding of HTML,
            CSS, JavaScript, Bootstrap, and Tailwind, and I'm proficient in
            using React and Figma to create high-quality interfaces. I'm always
            looking for new challenges and opportunities to learn and grow, and
            I'm excited to use my skills to help businesses and individuals
            achieve their online goals.
          </p>
        </div>
        {/*Download CV*/}
        <a
          href={CV}
          download=""
          className="w-[160px] h-[30px] bg-slate-300 flex  justify-around items-center rounded-sm text-sm"
        >
          <span>Download CV</span>
          <FiFileText />
        </a>
        {/*Info*/}
        <div className="flex  justify-between text-sm sm:flex-col sm:gap-y-3 ">
          <ul className=" font-semibold uppercase">
            <li>Name:</li>
            <li>Age:</li>
          </ul>
          <ul>
            <li>Alex Shaniz</li>
            <li>19</li>
          </ul>
          <ul className=" font-semibold uppercase">
            <li>Email:</li>
            <li>Address:</li>
          </ul>
          <ul>
            <li>kyawkyaw91a@gmail.com</li>
            <li>Myanmar,Yangon state,south dagon</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
