import {projects} from "./projects.js";

const projectsDiv = document.querySelector(".projects");
const projectSect = document.querySelectorAll(".project-sect");
const certificateLink = document.querySelectorAll(".certificate");
const modalWindow = document.querySelector(".modal-window");
const modalImg = document.querySelector(".modal-image");
const crossImg = document.querySelector(".mh-img");

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

//to select which image to be displayed in modal window
const displayCertificates = (id) => {
    let src;
    switch (id) {
        case "c": {
            src = "./certificates/C-cert.jpg";
            break;
        }    
        case "java": {
            src = "./certificates/java-cert.jpg";
            break;
        }
        case "android": {
            src = "./certificates/android-cert.jpg";
            break;
        }
        case "mean": {
            src = "./certificates/full-stack-cert.jpg";
            break;
        }
        case "git": {
            src = "./certificates/git-cert.png";
            break;
        }
        case "ts": {
            src = "./certificates/TypeScript-cert.png";
            break;
        }
    }

    modalImg.setAttribute('src', src);
}

// for the links to be working in projects cards
projectSect.forEach((project) => {
    project.addEventListener('click', () => {
        let skill = project.classList[1];
        project.classList.add("project-active");
        displayProjects(skill);
    })
})

// to open modal window
certificateLink.forEach((certificate) => {
    certificate.addEventListener('click', () => {
        let id = certificate.getAttribute('id');
        modalWindow.classList.remove("hidden");
        displayCertificates(id);
    });
});

//to close the modal window
crossImg.addEventListener('click', () => {modalWindow.classList.add("hidden")});

