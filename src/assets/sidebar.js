import projects from "./projects";

/*Create a button used for adding projects to our sidebar.
  Individually scoped for reusability. */

const addProjectButton = function() {
    const button = document.createElement('div');
    button.classList.add("addProjectButton");
    button.textContent = "+";

    return button;
}

/*Create a small form that user's can submit new Projects through, include a cancel and enter button with
    external logic for handling the display*/

const addProjectForm = function(){
    const formContainer = document.createElement('div');
    formContainer.classList = "newProjectForm";
    formContainer.style.display = 'none';

    const textInput = document.createElement('input');
    textInput.setAttribute = ("type", "text");
    textInput.setAttribute = ("placeholder", "Enter Project");

    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.textContent = 'Cancel';

    const enter = document.createElement('button');
    enter.classList.add('enter');
    enter.textContent = 'Enter';
    
    
    formContainer.append(textInput, cancel, enter);
    
    return formContainer;
}

/*Called in content.js
    Create our Container Element that we return at the bottom.
    Create our Title, ProjectList and AddProject elements + append them.
    Create our ProjectItems NodeList imported from projects.js + append them.*/

const sidebar = function() {

    const container = document.createElement('div');
    container.classList.add("sidebar");

    const project = document.createElement('h3');
    project.textContent = "Projects";

    const projectList = document.createElement('div');
    projectList.classList.add("sideBarList");
    
    container.append(project, projectList, addProjectButton(), addProjectForm());
    projectList.append(...projects());

    return container;
}

export {sidebar, addProjectButton};