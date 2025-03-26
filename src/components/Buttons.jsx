import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import "../styles/buttons.css";

const Buttons = ({ routes }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <ul className="flex gap-4 relative">
      {routes.map((e, i) => (
        <div
          key={i}
          className="bg-[#141414] hover:brightness-150 hover:pointer transition-all h-13 w-13 border p-2 -skew-x-6 border-black sombra rounded-md flex justify-center relative"
          onMouseEnter={() => setActiveIndex(i)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {i === 2 ? (
            <a href="/CV.pdf" download="EnzooLionel_CV.pdf">
              <img src={e.icon} alt={e.title} />
            </a>
          ) : i === 3 ? (
            <a href="mailto:enzoperaltalio@gmail.com?subject=Contacto desde mi web&body=Hola, te contacto por...">
              <img src={e.icon} alt={e.title} />
            </a>
          ) : (
            <a href={`${e.ruta}`}>
              <img src={e.icon} alt={e.title} />
            </a>
          )}
          {activeIndex === i && (
            <motion.div
              initial={{ opacity: 0, y: -10 }} // Aparece desde arriba con opacidad 0
              animate={{ opacity: 1, y: 0 }} // Se hace visible y baja un poco
              exit={{ opacity: 0, y: -10 }} // Desaparece elevándose
              transition={{ duration: 0.2 }} // Duración de la animación
              className="text-white border border-white w-max px-3 py-1 relative mt-14 rounded-xl bg-[#141414]"
            >
              {e.title}
            </motion.div>
          )}
        </div>
      ))}
    </ul>
  );
};

export default Buttons;
