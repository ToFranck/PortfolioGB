import './App.css';
import Hero from './components/hero/hero';
import Infos from './components/infos/infos';
import ProjectsList from './components/projectsList/ProjectsList';
import projects from './data/projects3d';
import ProjectsListMotion from './components/projectListMotion/ProjectListMotion';
import projectsm from './data/projectsmotion';
import { Contact } from './components/contact/contact';




function App() {
  return (
    <div className="App">
          <div>
               <Hero/>
               
               <Infos />
              
               <ProjectsList projects3d={projects} />

               <ProjectsListMotion projectsmotion={projectsm} />

               <Contact />

          </div>
          
    </div>
  );
}

export default App;
