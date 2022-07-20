import sidebar from "./sidebar";

const content = function() {
 /*Create a central content container, import our Sidebar and Project Container,
    append them to our container and return the component. */
    const content = document.createElement('div');
    content.classList.add("content");

    const projectToDos = document.createElement('div');
    projectToDos.classList.add("projectContainer");
    content.append(sidebar(), projectToDos);
    return content;
}

export default content;