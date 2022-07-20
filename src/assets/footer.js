import GitHub from "./images/github.svg";

const footer = function() {
    const container = document.createElement('footer');
    container.classList.add("footer");

    const credit =  document.createElement('p');
    credit.classList.add("credit");
    credit.textContent = 'Copyright - Joshua Morton 2022 - ';

    const github = document.createElement('a');
    github.href = "https://github.com/jMorton95";

    const githubImg =  document.createElement('img');
    githubImg.src = GitHub;
    github.appendChild(githubImg);

    container.append(credit, github);

    return container;
}

export default footer;