import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/buttons.css";

const Buttons = ({ routes }) => {
  const rutas = routes;

  return (
    <ul className="flex gap-4">
      {rutas.map((e, i) => (
        <motion.div
          key={i}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="hover:brightness-150 hover:pointer transition-all h-13 w-13 border p-2 -skew-x-6 border-black sombra rounded-md"
        >
          <Link to={`/${e.ruta}`}>
            <img src={`${e.icon}`} alt={e.title} />
          </Link>
        </motion.div>
      ))}
    </ul>
  );
};

export default Buttons;
