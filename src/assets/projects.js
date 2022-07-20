import dataHandling from '../functions/data.js';

const projects = function(){
    const allTodos = (function() {
        let nodes = [];
        for (let x = 0; x < dataHandling().length; x++){
            let el = document.createElement('div');
            el.classList.add('projectItem');
            el.textContent = `Project ${x}`;
            nodes.push(el);
         }
        return nodes;
    })();
    
return allTodos;
}

export default projects;