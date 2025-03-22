import GridView from "../views/GridView";
import MainView from "../views/MainView";
import ProjectsLayout from "./ProjectsLayout";

const MainLayout = () => {
  return (
    <main className="bg-[#141414] overflow-x-hidden">
      <div className="h-40 w-40 rounded-full blur-3xl right-0 gradiente-radial "></div>
      <MainView />
      <GridView />
      <ProjectsLayout />
      <div className="h-40 w-40 rounded-full blur-3xl -left-14 absolute mt-[90vh] gradiente-radial"></div>
    </main>
  );
};

export default MainLayout;
