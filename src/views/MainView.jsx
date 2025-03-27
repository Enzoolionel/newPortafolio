import { motion } from "framer-motion";

import Buttons from "../components/Buttons";
import "../styles/MainView.css";
import cvC from "/icons/cv-48.svg";
import githubC from "/icons/github-52.svg";
import gmailC from "/icons/gmail-48.svg";
import linkedinC from "/icons/linkedin-48.svg";
import { Link } from "react-router-dom";

const MainView = () => {
  const routesMobile = [
    {
      title: "Github",
      icon: githubC,
      ruta: "https://github.com/Enzoolionel",
    },
    {
      title: "Linkedin",
      icon: linkedinC,
      ruta: "https://www.linkedin.com/in/enzo-peralta-b64132216/",
    },
    {
      title: "CV",
      icon: cvC,
      ruta: "#",
    },
    {
      title: "Email",
      icon: gmailC,
      ruta: "#",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex sm:justify-center p-5 items-center"
    >
      <section className="flex min-h-screen top-32 sm:top-64 flex-col relative gap-8">
        <motion.article
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
          className="hover:brightness-150 transition-all w-max px-4 py-2 flex items-center gap-2 border border-slate-600 rounded-3xl"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1, delay: 0.2 }}
            className="h-3 w-3 bg-green-500 block rounded-full efect"
          ></motion.span>
          <h2 className="text-slate-200 text-xs font-semibold">
            Disponible para Proyectos
          </h2>
        </motion.article>
        <article className="flex flex-col text-[#f8f8f8]">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            className="hover:brightness-150 transition-all text-3xl sm:text-4xl font-semibold"
          >
            Hola soy Enzo.
          </motion.h1>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            className="hover:brightness-150 transition-all text-3xl sm:text-4xl font-semibold"
          >
            Programador Full
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #22c55e" }}
            >
              Stack
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hover:brightness-150 transition-all max-w-[600px] flex text-gray-400 mt-8"
          >
            Principalmente trabajando en el ecosistema JavaScript, soy un
            solucionador de problemas dedicado, aprendiendo y construyendo. 😃
          </motion.h2>
        </article>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row mt-10 gap-4"
        >
          <Buttons routes={routesMobile} />
          <Link className="hover:cursor-pointer duration-75 hover:brightness-150 flex justify-center items-center transition-all h-13 w-40 border p-[3px] text-[#ccc] text-lg border-black sombra rounded-md">
            Explorar Mas
          </Link>
        </motion.article>
      </section>
    </motion.section>
  );
};

export default MainView;
