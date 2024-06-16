import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
 
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
 
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTasks = {
        taskId: Math.floor(Math.random() * 100),
        projectId: prevState.selectedProjectId,
        task: text,
      };
 
      return {
        ...prevState,
        tasks: [newTasks, ...prevState.tasks],
      };
    });
    console.log(projectState.tasks);
  }
 
  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== taskId),
      };
    });
  }
 
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
 
  function handleStartOrCancelAddProject(value) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: value, // null or undefined
      };
    });
  }
 
  function handleAddNewProject(newProjectData) {
    setProjectState((prevState) => {
      const projectData = {
        ...newProjectData,
        id: Math.floor(Math.random() * 100),
      };
 
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, projectData],
      };
    });
  }
 
  function handleProjectDelete() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        tasks: prevState.tasks.filter(
          (task) => task.projectId !== prevState.selectedProjectId
        ),
      };
    });
  }
 
  let selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
 
  let content = (
    <SelectedProject
      project={selectedProject}
      onProjectDelete={handleProjectDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
 
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddNewProject={handleAddNewProject}
        onCloseAddProject={handleStartOrCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartOrCancelAddProject} />
    );
  }
 
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartOrCancelAddProject}
        onSelectProject={handleSelectProject}
        projectsDetails={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}
 
export default App;