import {projects} from "./projects.js";

const projectsDiv = document.querySelector(".projects");
const projectSect = document.querySelectorAll(".project-sect");

//take the project details from project object and display it on page
const appendProjects = (screenshot, title, desc, github, live) => {
    const projectCardDiv = document.createElement('div');
    const cardHeaderDiv = document.createElement('div');
    const cardBodyDiv = document.createElement('div');

    const projectImg = document.createElement('img');
    const projectTitle = document.createElement('h1');
    const projectDesc = document.createElement('p');
    const githubLink = document.createElement('button');
    const liveLink = document.createElement('button');

    projectCardDiv.classList.add('project-card');
    cardHeaderDiv.classList.add('card-header');
    cardBodyDiv.classList.add('card-body');

    projectImg.classList.add('project-img');
    projectImg.src = screenshot;

    projectTitle.classList.add('project-title');
    projectTitle.innerText = title;

    projectDesc.classList.add('project-desc');
    projectDesc.innerText = desc;

    githubLink.classList.add('link');
    githubLink.innerText = "GitHub";

    liveLink.classList.add('link');
    liveLink.innerText = "Live";

    githubLink.addEventListener('click', () => { window.open(github, "_blank") })
    liveLink.addEventListener('click', () => { window.open(live, "_blank") });

    projectsDiv.appendChild(projectCardDiv);
    projectCardDiv.appendChild(cardHeaderDiv);
    cardHeaderDiv.appendChild(projectImg);

    projectCardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(projectTitle);
    cardBodyDiv.appendChild(projectDesc);
    
    projectCardDiv.appendChild(githubLink);
    projectCardDiv.appendChild(liveLink);
}

//clears the project before adding new ones
const removeProjects = () => {
    while(projectsDiv.firstChild){
        projectsDiv.removeChild(projectsDiv.firstChild);
    }
}

//adds the active class to the project nav element
// const addActiveClass = (skill, selectedSkill) => {
    
// }

//removes the active class to the project nav element
const removeActiveClass = (skill) => {
    projectSect.forEach((project) => {
        if(project.classList.contains("project-active") && project.classList[1] !== skill){
            project.classList.remove("project-active");
        }
    })
}

//decides which projects to display
const displayProjects = (skill) => {
    
    switch (skill) {
        case "html": {
            removeProjects();
            removeActiveClass(skill);
            projects.html.forEach((project) => {
                appendProjects(project.screenshot, project.title, project.description, project.github, project.live);
            });
            break;
        }
        case "javascript": {
            removeProjects();
            removeActiveClass(skill);
            projects.JavaScript.forEach((project) => {
                appendProjects(project.screenshot, project.title, project.description, project.github, project.live);
            });
            break;
        }
        case "react": {
            removeProjects();
            removeActiveClass(skill);
            projects.react.forEach((project) => {
                appendProjects(project.screenshot, project.title, project.description, project.github, project.live);
            });
            break;
        }
        case "backend": {
            removeProjects();
            removeActiveClass(skill);
            projects.backend.forEach((project) => {
                appendProjects(project.screenshot, project.title, project.description, project.github, project.live);
            });
            break;
        }
        default:
            projectSect[0].classList.add("project-active");
            projects.html.forEach((project) => {
                appendProjects(project.screenshot, project.title, project.description, project.github, project.live);
            });
            break;
    }

}

displayProjects();

projectSect.forEach((project) => {
    project.addEventListener('click', () => {
        let skill = project.classList[1];
        project.classList.add("project-active");
        displayProjects(skill);
    })
})



