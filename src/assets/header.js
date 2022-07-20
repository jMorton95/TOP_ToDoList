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

    const theme = document.createElement('button');
    theme.classList.add("theme");
    theme.textContent = "Switch Theme";

    container.append(titleImg, pageName, theme);
    return container;
}

export default header;