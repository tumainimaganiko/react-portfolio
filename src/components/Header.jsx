import { FaLinkedin } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <section className="bg-white text-black rounded-3xl m-5 p-5 tablet:my-[10%] tablet:mx-[5%] laptop:p-16 desktop:mx-[10%]">
      <h2 className="text-3xl italic mt-0 ">hello!</h2>
      <p className="text-base text-justify leading-5 tablet:text-left font-[avenir] font-normal">
        I am a software developer working productively in dynamic environments.
        Proud team player focused on achieving project objectives with speed and
        accuracy. 😎
      </p>
      <div className="flex mt-5 tablet:justify-around laptop:justify-between">
        <div className="w-[30%] grid grid-cols-2 tablet:w-1/2 tablet:flex tablet:justify-around laptop:w-[30%] laptop:justify-start">
          <a
            href="https://www.linkedin.com/in/tumainimaganiko/"
            target="_blank"
            rel="noreferrer"
            className="p-0 mx-2"
          >
            <FaLinkedin className="text-2xl text-black" />
          </a>
          <a
            href="https://github.com/tumainimaganiko"
            target="_blank"
            rel="noreferrer"
            className="p-0 mx-2"
          >
            <BsGithub className="text-2xl text-black" />
          </a>
          <a
            href="https://wellfound.com/u/tumaini-maganiko"
            target="_blank"
            rel="noreferrer"
            className="p-0 mx-2"
          >
            <FaAngellist className="text-2xl text-black" />
          </a>
          <a
            href="https://twitter.com/Chief2maini"
            target="_blank"
            rel="noreferrer"
            className="p-0 mx-2"
          >
            <FaTwitter className="text-2xl text-black" />
          </a>
        </div>
        <div className="flex flex-col items-center w-[70%] tablet:w-1/2 tablet:justify-between tablet:flex-row laptop:w-[40%] laptop:justify-end">
          <a
            href="#project"
            className="no-underline py-[5px] px-[15px] border border-slate-950 rounded-[20px] text-slate-950 text-[11px] font-bold m-[2px] w-[165px] text-center hover:bg-[#2F3634] hover:text-white"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="no-underline py-[5px] px-[15px] border border-slate-950 rounded-[20px] text-slate-950 text-[11px] font-bold m-[2px] w-[165px] text-center hover:bg-[#2F3634] hover:text-white"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
