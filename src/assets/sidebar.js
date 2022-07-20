import projects from "./projects";

const sidebar = function(){
    const container = document.createElement('div');
    container.classList.add("sidebar");

    const title = document.createElement('div');
    title.classList.add("title");
    title.textContent = "Title";
    container.appendChild(title);

    const projectList = document.createElement('div');
    projectList.classList.add("sideBarList");
    projectList.textContent = "Projects";
    container.appendChild(projectList);
    
    projectList.append(...projects());
    
    

    return container;
}

export default sidebar;