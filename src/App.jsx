import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId:undefined,
    // undefined: neither adding a new project or have a new project selected
    projects: []
  });
  function handleStartAddProject(){
    setProjectsState(prevState=>{
      return{
        // null means that we're adding a new project
        ...prevState,
        selectedProjectId:null,

      };
    });
  }
  function handleAddProject (projectData){
    setProjectsState (prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };

    })
  }

  console.log(projectsState);

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>;
  } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }
  return (
    <>
    <main className= "h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
     
      {content}
      </main>
    </>
  );
}

export default App;
