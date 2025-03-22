import razor from "/images/razor.png";
import tailwind from "/icons/tailwind.svg";
import python from "/icons/python.svg";
import express from "/icons/express.svg";
import bootstrap from "/icons/bootstrap.svg";
import git from "/icons/git.svg";

const CardProject = () => {
  const tools = [tailwind, python, express, bootstrap, git];

  return (
    <article className="w-full max-w-sm z-10 sm:w-[30%] flex flex-col gap-3 mt-7">
      <img
        src={razor}
        alt="imagen"
        className="hover:scale-105 transition-all overflow-hidden h-[230px] w-full object-cover rounded-2xl"
      />
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-white">2024</h2>
        <ul className="flex gap-2">
          {tools.map((e, i) => (
            <img key={i} src={e} alt="icono" className="w-7 h-7 object-cover" />
          ))}
        </ul>
      </div>
      <h1 className="text-2xl font-semibold text-white">Título del Proyecto</h1>
      <h2 className="text-slate-500 ">
        Datos del proyecto, detalles y más información...
      </h2>
      <button className="w-max text-green-500 rounded-lg mt-4 font-semibold">
        Ver más!
      </button>
    </article>
  );
};

export default CardProject;
