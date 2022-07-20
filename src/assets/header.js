import Icon from "./images/title.svg";

const header = function() {
    const container = document.createElement("div");
    container.classList.add("header");

    const titleImg = document.createElement("img");
    titleImg.classList.add("titleImg");
    titleImg.src = Icon;

    const pageName = document.createElement("h1");
    pageName.classList.add("title");
    pageName.textContent = "To Do List";

    container.append(titleImg, pageName);
    return container;
}

export default header;