import dataHandling from '../functions/data.js';
import Icon from "./images/sidebarIcon.svg";

const projects = function(){
    const allTodos = (function() {
        const nodes = [];

        for (let x = 0; x < dataHandling().length; x++){
            const el = document.createElement('button');
            el.classList.add('projectItem');

            const icon = document.createElement('img');
            icon.src = Icon;

            const project = document.createElement('h3');
            project.textContent = dataHandling()[x];

            el.append(icon, project);

            nodes.push(el);
         }
        return nodes;
    })();
    
return allTodos;
}

export default projects;