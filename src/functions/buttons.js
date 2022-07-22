const buttonHandling = function() {
    const sidebar = document.querySelector('.sidebar')
    const addProject = document.querySelector('.addProjectButton');
    const projectForm = document.querySelector('.newProjectForm');
    const closeFormButton = document.querySelector('.cancel');
    
    addProject.addEventListener('click', () => {
        addProject.style.display = 'none';
        projectForm.style.display = 'flex';
    });
    
    closeFormButton.addEventListener('click', () => {
        projectForm.style.display = 'none';
        addProject.style.display = 'flex';
    });
}

export {buttonHandling};