import linkedin from "/icons/linkedin-48.svg";
import instagram from "/icons/instagram.svg";
import twitter from "/icons/twitter-alt.svg";
import github from "/icons/github-52.svg";
import gmail from "/icons/gmail-48.svg";

const Footer = () => {
  const tools = [linkedin, instagram, twitter, github, gmail];

  return (
    <footer className="h-[500px] bg-neutral-950 z-10 relative text-white flex flex-col justify-center py-7 px-5 sm:px-40 xl:px-80">
      <h1 className="relative bottom-20">EnzooLionel 💻</h1>
      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between lg:items-center relative bottom-10">
        <h2 className="text-gray-500 max-w-[500px]">
          Si te gusta lo que hago y querés aprender conmigo, seguime en YouTube!
          🚀 Voy a estar subiendo nuevos videos con proyectos reales y tips que
          te van a ayudar 👉
          <a
            href="https://www.youtube.com/@NoTanJunior"
            className="underline text-white"
          >
            NoTanJunior
          </a>
        </h2>
        <button className="border border-white w-max lg:px-10 px-4 py-3 rounded-3xl">
          Contactame
        </button>
      </div>
      <ul className="flex gap-2">
        {tools.map((e, i) => (
          <img key={i} src={e} alt="icono" className="w-5 h-5 object-cover" />
        ))}
      </ul>
      <h3 className="relative text-center min-w-max top-32 lg:top-40 text-gray-500">
        ©EnzooLionel. Todos los derechos reservados.
      </h3>
    </footer>
  );
};

export default Footer;
