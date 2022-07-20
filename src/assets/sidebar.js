import projects from "./projects";

const sidebar = function(){
/*Called in Index.js
    Create our Container Element that we return at the bottom.
    Create our Title, ProjectList and AddProject elements + append them.
    Create our ProjectItems NodeList imported from projects.js + append them.*/
    const container = document.createElement('div');
    container.classList.add("sidebar");

    const project = document.createElement('h3');
    project.textContent = "Projects";

    const projectList = document.createElement('div');
    projectList.classList.add("sideBarList");
    projectList.textContent = "Projects";
    
    
    const addProject = document.createElement('div');
    addProject.classList.add("addProject");
    addProject.textContent = "+";

    container.append(project, projectList, addProject);
    projectList.append(...projects());

    return container;
}

export default sidebar;