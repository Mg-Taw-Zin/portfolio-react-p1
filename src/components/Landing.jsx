import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaHandsClapping } from "react-icons/fa6";
import Video from "../assets/bg.mp4";

const Landing = () => {
  return (
    <div
      id="home"
      className=" h-screen w-full flex justify-center items-center "
    >
      {/*bg video*/}
      <video
        src={Video}
        className=" blur-sm absolute h-full w-full top-0 object-cover  -z-10"
        autoPlay
        loop
        muted
      ></video>
      {/*social icons*/}
      <div className=" absolute left-3 flex flex-col gap-y-5  text-base bg-black/30 p-2 rounded-lg   ">
        <a
          href="https://www.facebook.com/alexshaniz125"
          title="Facebook"
          target="_blank"
          className="  bg-blue-500 text-white p-2 rounded-lg"
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/thaw-zin-64a77a255?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUvJR11qEQeGIvINRLZ%2FuNQ%3D%3D"
          title="Linkedin"
          target="_blank"
          className="  bg-blue-500 text-white p-2 rounded-lg"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/Mg-Taw-Zin"
          title="Github"
          target="_blank"
          className="  bg-black text-white p-2 rounded-lg"
        >
          <FiGithub />
        </a>
      </div>
      {/*Hero*/}
      <div>
        <h1 className="flex flex-col items-center gap-y-4 text-gray-800 ">
          <span className=" text-4xl sm:text-2xl flex items-center gap-x-3 font-normal">
            Hello
            <FaHandsClapping />
          </span>
          <span className=" text-5xl  font-bold uppercase sm:text-3xl ">
            Alex Shaniz
          </span>
          <span className=" text-5xl font-medium uppercase sm:text-2xl  text-center">
            I am a Web Developer
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Landing;
