import { motion } from "framer-motion";
import razor from "/images/razor.png";
import tailwind from "/icons/tailwind.svg";
import python from "/icons/python.svg";
import express from "/icons/express.svg";
import bootstrap from "/icons/bootstrap.svg";
import git from "/icons/git.svg";

const CardProject = () => {
  const tools = [tailwind, python, express, bootstrap, git];

  return (
    <motion.article
      className="z-10 flex flex-col gap-3 mt-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={razor}
        alt="imagen"
        className="hover:scale-105 transition-all overflow-hidden h-[230px] w-full object-cover rounded-2xl"
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-white">2024</h2>
        <ul className="flex gap-2">
          {tools.map((e, i) => (
            <motion.img
              key={i}
              src={e}
              alt="icono"
              className="w-7 h-7 object-cover"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </ul>
      </div>
      <motion.h1
        className="text-2xl font-semibold text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Título del Proyecto
      </motion.h1>
      <motion.h2
        className="text-slate-500"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Datos del proyecto, detalles y más información...
      </motion.h2>
      <motion.button
        className="w-max text-green-500 rounded-lg mt-4 font-semibold"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        Ver más!
      </motion.button>
    </motion.article>
  );
};

export default CardProject;
