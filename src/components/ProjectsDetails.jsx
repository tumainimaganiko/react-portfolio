import reactLogo from "../assets/images/react-1.svg";
import reduxLogo from "../assets/images/redux.svg";
import uuid4 from "uuid4";
import cssLogo from "../assets/images/css-3.svg";
import { HiXMark } from "react-icons/hi2";
import htmlLogo from "../assets/images/html-1.svg";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProjectsDetails = () => {
  const { projects } = useSelector((store) => store.projects);
  const [popup, setPopup] = useState(false);
  return (
    <section className="pb-[28px]">
      {projects.map((item,index) => (
        <>
          <div
            key={uuid4()}
            id={index}
            className="border-b border-[#272d2b] py-5 px-0 last:border-none tablet:flex tablet:border-none tablet:gap-x-[20px] tablet:even:flex-row-reverse"
          >
            <div className="tablet:w-1/2 laptop:w-[60%]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover tablet:w-full tablet:h-full dark:bg-red-50 tablet:object-fill tablet:p-0"
              />
            </div>
            <div className="tablet:w-1/2 laptop:w-[40%]">
              <h2 className="m-0 text-[#859591]">{item.name}</h2>
              {item.description.split("\n").map((line, index) => (
                <p className="text-left" key={index}>
                  {line}
                </p>
              ))}
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src={reactLogo}
                    alt=""
                    className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]"
                  />
                  <img
                    src={reduxLogo}
                    alt=""
                    className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]"
                  />
                  <img
                    src={htmlLogo}
                    alt=""
                    className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]"
                  />
                  <img
                    src={cssLogo}
                    alt=""
                    className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]"
                  />
                </div>
                <button
                  onClick={() => setPopup(true)}
                  className="no-underline bg-[#2f3634] text-white py-[10px] px-[15px] rounded-[30px] text-[14px] font-bold"
                >
                  VIEW CODE
                </button>
              </div>
            </div>
            {popup && (
            <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-3/4 w-1/2 border border-red-600">
              <button onClick={() => setPopup(false)} className="fixed right-1 top-1">
                <HiXMark />
              </button>
            </div>
          )}
          </div>
          
        </>
      ))}
    </section>
  );
};

export default ProjectsDetails;
