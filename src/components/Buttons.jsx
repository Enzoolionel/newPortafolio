import { Link } from "react-router-dom";
import "../styles/buttons.css";

const Buttons = ({ routes }) => {
  const rutas = routes;

  return (
    <ul className="flex gap-4 ">
      {rutas.map((e, i) => (
        <Link
          className="h-13 w-13 text-red-600 border p-2 -skew-x-6 border-black sombra rounded-md "
          to={`/${e.ruta}`}
          key={i}
        >
          <img src={`${e.icon}`} alt={e.title} />
        </Link>
      ))}
    </ul>
  );
};

export default Buttons;
