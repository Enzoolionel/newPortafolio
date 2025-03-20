import Buttons from "../components/Buttons";
import "../styles/MainView.css";

import cvC from "/icons/cv-48.svg";
import githubC from "/icons/github-52.svg";
import gmailC from "/icons/gmail-48.svg";
import linkedinC from "/icons/linkedin-48.svg";

const MainView = () => {
  const routesMobile = [
    {
      title: "Github",
      icon: githubC,
      ruta: "#",
    },
    {
      title: "Linkedin",
      icon: linkedinC,
      ruta: "#",
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
    <section className="min-h-screen sm:max-w-screen flex sm:justify-center sm:items-center ">
      <section className=" flex flex-col absolute top-28 px-5 gap-8">
        <article className="w-max px-4 py-2 flex items-center gap-2 border border-slate-600 rounded-3xl">
          <span className="h-3 w-3 bg-green-500 block rounded-full efect"></span>
          <h2 className="text-slate-200 text-xs font-semibold">
            Disponible para Proyectos
          </h2>
        </article>
        <article className="flex flex-col text-[#f8f8f8]">
          <h1 className="text-3xl sm:text-4xl font-semibold">Hola soy Enzo.</h1>
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Programador FullStack.
          </h1>
          <h2 className="max-w-[600px] flex text-gray-400 mt-8">
            Principalmente trabajando en el ecosistema JavaScript, soy un
            solucionador de problemas dedicado, aprendiendo y construyendo. 😃
          </h2>
        </article>
        <article className="flex flex-col sm:flex-row mt-10 gap-4">
          <Buttons routes={routesMobile} />
          <button className="h-13 w-40 border p-[3px] text-[#ccc] text-lg border-black sombra rounded-md">
            Explorar Mas
          </button>
        </article>
      </section>
    </section>
  );
};

export default MainView;
