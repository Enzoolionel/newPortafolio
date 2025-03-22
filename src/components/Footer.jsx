import tailwind from "/icons/tailwind.svg";
import python from "/icons/python.svg";
import express from "/icons/express.svg";
import bootstrap from "/icons/bootstrap.svg";
import git from "/icons/git.svg";

const Footer = () => {
  const tools = [tailwind, python, express, bootstrap, git];

  return (
    <footer className="h-96 bg-gray-800 text-white flex flex-col justify-center items-center">
      <h1 className="relative bottom-20 right-[495px] ">EnzooLionel 💻</h1>
      <h2 className="text-gray-500 w-80 relative bottom-16 right-[390px]">
        Lorem is autem odit expedita sunt, totam deserunt facere non adipisci
        ipsum nihil aliquid.
      </h2>
      <ul className="flex gap-2 relative right-[470px]">
        {tools.map((e, i) => (
          <img key={i} src={e} alt="icono" className="w-7 h-7 object-cover" />
        ))}
      </ul>
      <p></p>
      <h3 className="relative top-28 text-gray-500 ">
        ©EnzooLionel. Todos los derechos reservados.
      </h3>
    </footer>
  );
};

export default Footer;
