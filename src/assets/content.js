const content = function() {
    const content = document.createElement('div');
    content.classList.add("content");

    const projectToDos = document.createElement('div');
    projectToDos.classList.add("projectContainer");
    content.appendChild(projectToDos);
    return content;
}

export default content;