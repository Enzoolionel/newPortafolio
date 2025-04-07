import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaSuitcase,
  FaTools,
  FaUser,
  FaBrain,
  FaLightbulb,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import perfil from "/images/perfilCv.jpg";

const CV = () => {
  return (
    <section className="bg-[#141414]">
      <main className="max-w-5xl mx-auto p-5 text-white flex flex-col items-center space-y-10">
        {/* Encabezado */}
        <header className="w-full text-center flex flex-col items-center">
          <motion.img
            src={perfil}
            alt="Foto de perfil"
            className="w-36 h-36 rounded-full border-2 border-gray-500 shadow-xl"
            whileHover={{ scale: 1.1 }}
          />
          <h1 className="text-4xl font-bold mt-4">Enzo Lionel Peralta</h1>
          <p className="text-lg text-gray-400">Desarrollador de Software</p>
          <p className="flex items-center gap-2 text-gray-400 mt-2">
            <FaMapMarkerAlt /> Quilmes, Buenos Aires, Argentina
          </p>
        </header>

        {/* Contenido Principal */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sobre mí */}
          <article className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
              <FaUser /> Sobre mí
            </h2>
            <p className="text-gray-300 mt-3">
              Desarrollador web junior con conocimientos sólidos en tecnologías
              web y gran interés por la programación. En búsqueda de crecer
              profesionalmente en IT, desarrollando habilidades y contribuyendo
              con ideas y soluciones.
            </p>
          </article>

          {/* Aptitudes */}
          <article className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <h2 className="text-xl font-semibold text-green-400 flex items-center gap-2">
              <FaBrain /> Aptitudes
            </h2>
            <ul className="mt-3 text-gray-300 grid grid-cols-2 gap-2">
              <li>Sociable</li>
              <li>Servicial</li>
              <li>Autodidacta</li>
              <li>Responsable</li>
              <li>Organizado</li>
              <li>Proactivo</li>
            </ul>
          </article>

          {/* Conocimientos */}
          <article className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <h2 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
              <FaLightbulb /> Conocimientos
            </h2>
            <div className="mt-3 text-gray-300 grid grid-cols-2 gap-2">
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>Java</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>Tailwind</span>
              <span>Express</span>
              <span>API RESTful</span>
              <span>Sass</span>
              <span>Bootstrap</span>
              <span>Figma</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </article>

          {/* Herramientas */}
          <article className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
            <h2 className="text-xl font-semibold text-teal-400 flex items-center gap-2">
              <FaTools /> Herramientas que uso
            </h2>
            <ul className="mt-3 text-gray-300 grid grid-cols-2 gap-2">
              <li>Visual Studio Code</li>
              <li>Postman</li>
              <li>Docker</li>
              <li>Linux</li>
              <li>Windows</li>
              <li>Herramientas de Desarrollo</li>
              <li>Figma</li>
              <li>Canva</li>
            </ul>
          </article>
        </section>

        {/* Experiencia y Formación */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
            <h2 className="text-xl font-semibold text-yellow-400 flex items-center gap-2">
              <FaBriefcase /> Experiencia Laboral
            </h2>
            <ul className="mt-3 text-gray-300">
              <li>
                <strong>Asesor Comercial</strong> - Renault Minuto (2018-2019)
              </li>
              <li>
                <strong>Encargado de Depósito</strong> - Bulonera del Sur S.A.
                (2016-2018)
              </li>
            </ul>
          </article>

          <article className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-red-400">
            <h2 className="text-xl font-semibold text-red-400 flex items-center gap-2">
              <FaGraduationCap /> Formación Académica
            </h2>
            <ul className="mt-3 text-gray-300">
              <li>Universidad Nacional de Quilmes (En curso)</li>
              <li>Quilmes School of Language (En curso)</li>
              <li>Escuela Técnica Reino de España N° 5</li>
            </ul>
          </article>
        </section>

        {/* Contacto */}
        <footer className="bg-gray-900 p-6 rounded-lg shadow-lg w-full text-center border-t-4 border-gray-500">
          <h2 className="text-xl font-semibold text-gray-400">Contacto</h2>
          <div className="mt-3 text-gray-300 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <FaPhone /> +5491135735841
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope /> enzoperaltalio@gmail.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaLinkedin />
              <a
                href="https://linkedin.com/in/enzo-peraltab64132216"
                className="text-blue-400"
              >
                LinkedIn
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaGithub />
              <a
                href="https://github.com/Enzoolionel"
                className="text-blue-400"
              >
                GitHub
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaSuitcase />
              <a
                href="https://enzoolionel.vercel.app"
                className="text-blue-400"
              >
                Portafolio
              </a>
            </p>
          </div>
        </footer>
      </main>
    </section>
  );
};

export default CV;
