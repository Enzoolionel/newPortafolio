import tailwind from "/icons/tailwind.svg";
import python from "/icons/python.svg";
import express from "/icons/express.svg";
import bootstrap from "/icons/bootstrap.svg";
import git from "/icons/git.svg";

const Footer = () => {
  const tools = [tailwind, python, express, bootstrap, git];

  return (
    <footer className="h-[500px] bg-neutral-950 z-10 relative text-white flex flex-col justify-center py-7 px-5 sm:px-40 xl:px-80">
      <h1 className="relative bottom-14">EnzooLionel 💻</h1>
      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between lg:items-center relative bottom-10">
        <h2 className="text-gray-500 w-80">
          Lorem is autem odit expedita sunt, totam deserunt facere non adipisci
          ipsum nihil aliquid.
        </h2>
        <button className="border border-white w-max lg:px-10 px-4 py-3 rounded-3xl">
          Contactame
        </button>
      </div>
      <ul className="flex gap-2">
        {tools.map((e, i) => (
          <img key={i} src={e} alt="icono" className="w-7 h-7 object-cover" />
        ))}
      </ul>
      <h3 className="relative text-center min-w-max top-32 lg:top-40 text-gray-500">
        ©EnzooLionel. Todos los derechos reservados.
      </h3>
    </footer>
  );
};

export default Footer;
