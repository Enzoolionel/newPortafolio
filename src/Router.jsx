//aca manejo todas las rutas
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProjectsLayout from "./layout/ProjectsLayout.jsx";

const Router = () => {
  // const handleclick = () => {
  //   const htmlElement = document.documentElement;
  //   const currentTheme = htmlElement.dataset.theme;

  //   if (currentTheme === "dark") {
  //     htmlElement.setAttribute("data-theme", "light");
  //   } else {
  //     htmlElement.setAttribute("data-theme", "dark");
  //   }

  //   console.log(htmlElement.dataset.theme);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/projects" element={<ProjectsLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
