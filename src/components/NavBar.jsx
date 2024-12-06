import { useState } from "react";
import { motion } from "motion/react";

const iconos = {
  apertura: {
    close: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    ),
    open: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    ),
  },
  lista: {
    sobreMi: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    proyectos: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
    contactame: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
    mode: {
      dark: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      ),
      light: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ),
    },
  },
};

// useEffect(() => {
//   darkMode
//     ? document.documentElement.classList.add("dark")
//     : document.documentElement.classList.remove("dark");

//   localStorage.setItem("darkMode", darkMode);
// }, [darkMode]);

// function handleChange() {
//   setAbierto(!abierto);
//   if (abierto) {
//     document.body.classList.add("no-scroll");
//   }
// }

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

const NavBar = () => {
  const [abierto, setAbierto] = useState(true);
  const [modo, setModo] = useState(false);

  return (
    <motion.nav
      className={`flex flex-col justify-center p-3 transition-all   ${
        abierto ? "h-screen" : "h-16"
      }
      ${modo ? "bg-slate-700 text-slate-300" : "bg-slate-300 text-slate-700"}
      `}
    >
      <ul
        className={`flex flex-col items-center gap-8 ${
          abierto ? "" : "relative bottom-32"
        }`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={list}
          className="flex flex-col gap-8"
        >
          <motion.li
            variants={item}
            transition={{ delay: 0.2 }}
            className="font-bold text-xl flex gap-1"
          >
            {iconos.lista.sobreMi}Sobre mi
          </motion.li>
          <motion.li
            variants={item}
            transition={{ delay: 0.4 }}
            className="font-bold text-xl flex gap-1"
          >
            {iconos.lista.proyectos}Proyectos
          </motion.li>
          <motion.li
            variants={item}
            transition={{ delay: 0.6 }}
            className="font-bold text-xl flex gap-1"
          >
            {iconos.lista.contactame}Contactame
          </motion.li>
        </motion.div>
        <li
          className="font-bold text-xl flex gap-1"
          onClick={() => setModo(!modo)}
        >
          {modo ? iconos.lista.mode.dark : iconos.lista.mode.light}
        </li>
      </ul>
      <button
        className={`relative flex justify-center ${
          abierto ? "top-[230px]" : "bottom-[112px]"
        }`}
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? iconos.apertura.close : iconos.apertura.open}
      </button>
    </motion.nav>
  );
};

export default NavBar;
