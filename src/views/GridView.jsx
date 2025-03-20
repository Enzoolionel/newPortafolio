import GitHubCalendar from "react-github-calendar";

import figma from "/icons/figma.svg";
import x from "/icons/twitter-alt.svg";
import instagram from "/icons/instagram.svg";

const GridView = () => {
  const explicitTheme = {
    light: ["#494949", "#7CB5AB", "#7ac7c4", "#55BFAD", "#00FFD4"],
  };
  return (
    <section className="max-h-max sm:max-w-screen relative p-[4%] z-10">
      <section className=" items-center justify-center">
        <article className="h-[420px] rounded-xl border border-slate-700"></article>
        <ul className="h-40 flex justify-between items-center">
          <li className="h-32 w-32 border p-11 border-slate-700 rounded-xl flex items-center justify-center">
            <img src={x} alt="" />
          </li>
          <li className="h-32 w-32 border p-11 border-slate-700 rounded-xl flex items-center justify-center">
            <img src={figma} alt="" />
          </li>
          <li className="h-32 w-32 border p-11 border-slate-700 rounded-xl flex items-center justify-center">
            <img src={instagram} alt="" />
          </li>
        </ul>
        <article className="h-72 max-w-screen border p-5 border-slate-700 rounded-xl flex flex-col justify-center">
          <article className="relative bottom-10  w-max px-4 py-2 flex items-center gap-2 border border-slate-600 rounded-3xl">
            <h2 className="text-slate-200 text-xs font-semibold ">
              Disponible para Proyectos
            </h2>
          </article>
          <h1 className="mb-5 text-white text-2xl">Bookmarked</h1>
          <h2 className="text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            debitis ipsam. Expedita sequi praesentium
          </h2>
        </article>
        <button className="h-20 border border-slate-700 mt-5 rounded-xl flex w-[100%] items-center px-5 text-xl font-semibold text-[#ccc]">
          Discover more projects
        </button>
        <article className="border border-slate-700 rounded-xl p-4 mt-5">
          <GitHubCalendar
            username="enzoolionel"
            theme={explicitTheme}
            style={{ color: "white" }}
          />
        </article>
        <article className="h-72 mt-5 max-w-screen border p-3 border-slate-700  rounded-xl flex flex-col ">
          <article className="relative w-max px-4 py-2 flex items-center border border-slate-600 rounded-3xl">
            <h2 className="text-slate-200 text-xs font-semibold ">
              Tech Stack
            </h2>
          </article>
        </article>
      </section>
    </section>
  );
};

export default GridView;
