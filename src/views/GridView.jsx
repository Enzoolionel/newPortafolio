import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

import figma from "/icons/figma.svg";
import x from "/icons/twitter-alt.svg";
import instagram from "/icons/instagram.svg";
import job from "/icons/job.svg";
import stack from "/icons/stack.svg";
import row from "/icons/row.svg";
import js from "/icons/javascript.svg";
import ts from "/icons/typescript.svg";
import react from "/icons/react.svg";
import mongodb from "/icons/mongodb.svg";
import node from "/icons/nodejs.svg";
import docker from "/icons/docker.svg";

const GridView = () => {
  const explicitTheme = {
    light: ["#494949", "#7CB5AB", "#7ac7c4", "#55BFAD", "#00FFD4"],
  };

  const iconos = [
    ts,
    js,
    react,
    mongodb,
    node,
    docker,
    ts,
    js,
    react,
    ts,
    js,
    react,
  ];

  return (
    <section className="max-h-max max-w-screen sm:max-w-[60%] sm:m-auto relative p-[4%] z-10">
      <section className=" items-center justify-center">
        <article className="h-[420px] rounded-xl border border-slate-700"></article>
        <ul className="h-40 flex justify-between items-center">
          <li className="h-28 w-28 border p-10 border-slate-700 rounded-xl flex items-center justify-center">
            <img src={x} alt="" />
          </li>
          <li className="h-28 w-28 border p-10 border-slate-700 rounded-xl flex items-center justify-center">
            <img src={figma} alt="" />
          </li>
          <li className="h-28 w-28 border p-10 border-slate-700 rounded-xl flex items-center justify-center">
            <img src={instagram} alt="" />
          </li>
        </ul>
        <article className="h-72 max-w-screen border p-5 border-slate-700 rounded-xl flex flex-col justify-center">
          <article className="relative bottom-10  w-max px-4 py-2 flex items-center gap-2 border border-slate-600 rounded-3xl">
            <img src={job} alt="" />
            <h2 className="text-slate-200 text-xs font-semibold ">
              Proyectos Destacados
            </h2>
          </article>
          <h1 className="mb-5 text-white text-2xl">Bookmarked</h1>
          <h2 className="text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            debitis ipsam. Expedita sequi praesentium
          </h2>
        </article>
        <button className="h-20 border border-slate-700 mt-5 rounded-xl flex justify-between w-[100%] items-center px-5 text-xl font-semibold text-[#ccc]">
          Discover more projects
          <img
            className="hover:rotate-90 hover:scale-125 transition-all"
            src={row}
            alt=""
          />
        </button>
        <article className="border border-slate-700 rounded-xl p-4 mt-5">
          <GitHubCalendar
            username="enzoolionel"
            theme={explicitTheme}
            style={{ color: "white" }}
            year={2025}
          />
        </article>
        <article className="h-80 mt-5 max-w-screen border p-3 border-slate-700 rounded-xl flex flex-col text-[#ccc] justify-between">
          <div className="relative w-max px-4 py-2 flex gap-2 items-center border border-slate-600 rounded-3xl">
            <img src={stack} alt="" />
            <h2 className="text-xs font-semibold ">Tech Stack</h2>
          </div>
          <div className="overflow-hidden w-full py-4 relative">
            <motion.div
              className="flex space-x-8 w-max"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }} // Mueve los elementos solo a la mitad de su tamaño
              transition={{
                repeat: Infinity,
                duration: 13,
                ease: "linear",
              }}
            >
              {[...iconos, ...iconos].map((icon, index) => (
                <img className="h-[70px]" src={icon} key={index} alt="" />
              ))}
            </motion.div>
          </div>
          <div>
            <h2 className="text-xl text-white font-semibold">
              Tecnologías que manejo
            </h2>
            <h3 className="mt-2 text-slate-400 text-sm ">
              Centrado principalmente en el ecosistema de JavaScript, pero
              siempre ansioso por explorar y aprender nuevas tecnologías
            </h3>
          </div>
        </article>
      </section>
    </section>
  );
};

export default GridView;
