import CardProject from "../components/CardProject";
import job from "/icons/job.svg";

const ProjectsLayout = () => {
  return (
    <section className="min-w-screen min-h-screen ">
      <section className="w-screen sm:w-70% sm:max-w-[70%] lg:max-w-[80%] xl:max-w-[50%] m-auto  flex flex-col gap-5 p-5 mt-60 mb-32">
        <article className="w-max px-4 py-2 flex items-center opacity-80 gap-2 border bg-green-900 border-green-500 rounded-2xl">
          <img src={job} alt="" />
          <h2 className="text-slate-200 text-xs font-semibold ">Proyectos</h2>
        </article>
        <article className="py-10 flex gap-4 justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-4xl font-semibold">
              Titulo del proyecto
            </h1>
            <h2 className="text-slate-500">
              Este es un proyecto X tiene un servidor con diferentes tecnologias
            </h2>
          </div>
          <article className="h-13 px-5 sm:flex items-center gap-2 border border-slate-200 rounded-4xl hidden">
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
