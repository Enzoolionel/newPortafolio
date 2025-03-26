import CardProject from "../components/CardProject";
import job from "/icons/job.svg";

const ProjectsLayout = () => {
  return (
    <section className="min-w-screen min-h-screen ">
      <section className="w-screen sm:w-70% sm:max-w-[70%] lg:max-w-[85%] xl:max-w-[50%] m-auto  flex flex-col gap-5 p-5 mt-60 mb-32">
        <article className="w-max px-4 py-2 flex items-center opacity-80 gap-2 border bg-green-900 border-green-500 rounded-2xl">
          <img src={job} alt="" />
          <h2 className="text-slate-200 text-xs font-semibold ">Proyectos</h2>
        </article>
        <article className="py-10 flex gap-4 justify-between">
          <div className="max-w-[550px] flex flex-col gap-3">
            <h1 className="text-white text-4xl font-semibold">
              Algunos de mis proyectos
            </h1>
            <h2 className="text-slate-500">
              Desarrollo de soluciones modernas con{" "}
              <span className="text-green-400 font-semibold">
                React, Node.js y MongoDB
              </span>
              . Cada proyecto es una oportunidad para aprender, mejorar y
              construir algo útil. Explora algunos de los proyectos en los que
              he trabajado recientemente.
            </h2>
          </div>
          <article className="h-13 px-5 sm:flex items-center gap-2 border border-slate-200 rounded-4xl hidden hover:cursor-pointer hover:scale-105 transition-all">
            <img src={job} alt="" />
            <h2 className="text-slate-200 text-xs font-semibold ">
              Proyectos Destacados
            </h2>
          </article>
        </article>
        <section className=" flex justify-center sm:justify-start flex-wrap gap-6 ">
          <CardProject />
          <CardProject />
        </section>
      </section>
    </section>
  );
};

export default ProjectsLayout;
