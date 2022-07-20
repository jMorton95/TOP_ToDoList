import sidebar from "./sidebar";

const content = function() {
    const content = document.createElement('div');
    content.classList.add("content");

    const projectToDos = document.createElement('div');
    projectToDos.classList.add("projectContainer");
    content.append(sidebar(), projectToDos);
    return content;
}

export default content;