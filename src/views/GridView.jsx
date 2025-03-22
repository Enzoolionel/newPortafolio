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
import tailwind from "/icons/tailwind.svg";
import python from "/icons/python.svg";
import express from "/icons/express.svg";
import bootstrap from "/icons/bootstrap.svg";
import git from "/icons/git.svg";

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
    git,
    docker,
    tailwind,
    python,
    express,
    bootstrap,
  ];

  return (
    <section>
      <div class="w-[90%] sm:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] m-auto grid grid-cols-1 gap-5 sm:grid-cols-4 sm:grid-rows-6">
        <article className="hover:brightness-150 h-80 sm:h-full transition-all col-span-1 sm:col-span-2 sm:row-span-2 p-4 rounded-xl border border-slate-700"></article>
        <article className=" hover:brightness-150 transition-all h-72 sm:h-[380px] col-span-1 sm:col-span-2 sm:row-span-3 sm:col-start-3 max-w-screen border p-5 border-slate-700 rounded-xl flex flex-col justify-center">
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
        <ul className=" col-span-1 sm:col-span-2 sm:row-start-3 flex  justify-between items-center">
          <li className="hover:brightness-150 transition-all h-28 w-[115px] border p-10 border-slate-700 rounded-xl flex items-center justify-center">
            <img src={x} alt="" />
          </li>
          <li className="hover:brightness-150 transition-all h-28 w-[115px] border p-10 border-slate-700 rounded-xl flex items-center justify-center">
            <img src={figma} alt="" />
          </li>
          <li className="hover:brightness-150 transition-all h-28 w-[115px] border p-10 border-slate-700 rounded-xl flex items-center justify-center">
            <img src={instagram} alt="" />
          </li>
        </ul>
        <article className="hover:brightness-150 transition-all border border-slate-700 rounded-xl p-3 flex items-center col-span-1 sm:col-span-2 sm:row-span-2 sm:row-start-4">
          <GitHubCalendar
            username="enzoolionel"
            theme={explicitTheme}
            style={{ color: "white" }}
            year={2025}
          />
        </article>
        <article className="hover:brightness-150 transition-all h-[380px] border p-3 border-slate-700 rounded-xl col-span-1 sm:col-span-2 sm:row-span-3 sm:col-start-3 sm:row-start- flex flex-col text-[#ccc] justify-between">
          <div className="relative w-max px-4 py-2 flex gap-2 items-center border border-slate-600 rounded-3xl">
            <img src={stack} alt="" />
            <h2 className="text-xs font-semibold ">Tech Stack</h2>
          </div>
          <div className=" overflow-hidden w-full py-4 relative">
            <motion.div
              className="flex space-x-8 w-max"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }} // Mueve los elementos solo a la mitad de su tamaño
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            >
              {[...iconos, ...iconos, ...iconos].map((icon, index) => (
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
        <button className="hover:brightness-150 transition-all col-span-1 sm:col-span-2 sm:row-start-6 h-20 sm:h-28 border border-slate-700 w-[100%] items-center px-5 text-xl flex justify-between rounded-xl font-semibold text-[#ccc]">
          Discover more projects
          <img
            className="hover:rotate-90 hover:scale-125 transition-all"
            src={row}
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default GridView;
