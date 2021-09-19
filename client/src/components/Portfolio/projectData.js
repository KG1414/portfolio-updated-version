import currentProject from '../../assets/images/current-project.png';
import secretsProject from '../../assets/images/secrets-project.png';
import journalProject from '../../assets/images/journal-project.png';
import keeperProject from '../../assets/images/keeper-project.png';
import simonGameProject from '../../assets/images/simon-game-project.png';
import newsletterProject from '../../assets/images/newsletter-project.png';


const projectData = [
    {
        id: 1,
        projectTitle: "My Portfolio",
        subTitle: "This current Portfolio",
        projectDescription: "This is my first portfolio website. ",
        imgUrl: currentProject,
        linkTitleOne: "",
        linkTitleTwo: "",
        linkOne: "",
        linkTwo: ""
    },
    {
        id: 2,
        projectTitle: "Journal App",
        subTitle: "",
        projectDescription: "https://github.com/KG1414/journal-app",
        imgUrl: journalProject,
        linkTitleOne: "Github",
        linkTitleTwo: "",
        linkOne: "https://github.com/KG1414/journal-app",
        linkTwo: ""
    },
    {
        id: 3,
        projectTitle: "Secrets App",
        subTitle: "",
        projectDescription: "https://github.com/KG1414/security-module",
        imgUrl: secretsProject,
        linkTitleOne: "Github",
        linkTitleTwo: "",
        linkOne: "https://github.com/KG1414/security-module",
        linkTwo: ""
    },
    {
        id: 4,
        projectTitle: "Tasks App",
        subTitle: "",
        projectDescription: "https://jtzym.csb.app/",
        imgUrl: keeperProject,
        linkTitleOne: "Website",
        linkTitleTwo: "",
        linkOne: "https://jtzym.csb.app/",
        linkTwo: ""
    },
    {
        id: 5,
        projectTitle: "Sign-Up App",
        subTitle: "",
        projectDescription: "https://obscure-inlet-76312.herokuapp.com/",
        imgUrl: newsletterProject,
        linkTitleOne: "Website",
        linkTitleTwo: "",
        linkOne: "https://obscure-inlet-76312.herokuapp.com/",
        linkTwo: ""
    },
    {
        id: 6,
        projectTitle: "Game App",
        subTitle: "",
        projectDescription: "Live Site: https://game-app-.glitch.me/   Code: https://glitch.com/edit/#!/game-app-   Github: https://github.com/KG1414/game",
        imgUrl: simonGameProject,
        linkTitleOne: "Website",
        linkTitleTwo: "Github",
        linkOne: "https://game-app-.glitch.me/",
        linkTwo: "https://github.com/KG1414/game"
    }
];

export default projectData;