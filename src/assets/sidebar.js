import todos from "./todos";

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

    /*Figure out how to Append this. */
    for (let x = 0; x < todos.length; x++){
        projectList.append(todos()[x]);
    }
    

    return container;
}

export default sidebar;