import { motion } from "framer-motion";

const CardProject = ({ src, tools, title, subtitle, fecha, link }) => {
  return (
    <motion.article
      className="z-10 flex flex-col gap-3 mt-7 p-4 rounded-2xl shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={src}
        alt="imagen"
        className="overflow-hidden max-w-[355px] h-[230px] w-full rounded-2xl"
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.05 }}
      />
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-white">{fecha}</h2>
        <ul className="flex gap-2">
          {tools?.map((e, i) => (
            <motion.img
              key={i}
              src={e}
              alt="icono"
              className="w-7 h-7 object-cover"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.05 }}
            />
          ))}
        </ul>
      </div>
      <motion.h1
        className="text-3xl font-semibold text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.h2
        className="text-slate-500 max-w-[300px]"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </motion.h2>
      <motion.a
        href={link}
        className="w-max text-white rounded-lg mt-4 font-semibold px-4 py-2 hover:cursor-pointer bg-green-800 border-green-500"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.05 }}
      >
        Ver más!
      </motion.a>
    </motion.article>
  );
};

export default CardProject;

// Lanzado en marzo de 2025, este proyecto utiliza React, Express, Node.js,
// MongoDB y Tailwind CSS .
