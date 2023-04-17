import {projects} from "./projects.js";

const projectsDiv = document.querySelector(".projects");

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

projects.html.forEach((html) => {
    appendProjects(html.screenshot, html.title, html.description, html.github, html.live);
});



