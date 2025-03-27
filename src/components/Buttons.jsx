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
            <a href={e.ruta}>
              <img src={e.icon} alt={e.title} />
            </a>
          )}
          {activeIndex === i && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-white border border-white px-4 py-2 absolute left-1/2 transform -translate-x-1/2 mt-16 rounded-lg bg-[#141414] text-sm text-center shadow-lg"
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
