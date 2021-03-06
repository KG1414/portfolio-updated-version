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
        projectDescription: "This current website is built with React.js to showcase some of my recent projects. Created with custom features including the carousel and these cards. The Contact Me form uses the getform.io API  (formerly used NodeMailer API). Used Node and connected front end with backend for API's and to deploy to Heroku.",
        imgUrl: currentProject,
        linkTitleOne: "Website",
        linkTitleTwo: "",
        linkOne: "https://kylegallard.herokuapp.com/",
        linkTwo: "",
        badgeOne: "React",
        badgeTwo: "JS",
        badgeThree: "Express",
        badgeFour: "API",
        badgeFive: "Bootstrap",
        badgeSix: "NodeJS",
        badgeSeven: "Axios",
        badgeEight: "DotEnv",
        badgeNine: "Cors",
        badgeTen: "CSS"
    },
    {
        id: 2,
        projectTitle: "Sign-Up App",
        subTitle: "",
        projectDescription: "Newsletter Sign-Up that sends user information to a Mailchimp database by connecting to their API.",
        imgUrl: newsletterProject,
        linkTitleOne: "Website",
        linkTitleTwo: "Github",
        linkOne: "https://obscure-inlet-76312.herokuapp.com/",
        linkTwo: "https://github.com/KG1414/newsletter-signup",
        badgeOne: "React",
        badgeTwo: "MongoDB",
        badgeThree: "Express",
        badgeFour: "API",
        badgeFive: "Bootstrap",
        badgeSix: "Mongoose",
        badgeSeven: "JS",
        badgeEight: "",
        badgeNine: "",
        badgeTen: ""
    },
    {
        id: 3,
        projectTitle: "Game App",
        subTitle: "",
        projectDescription: "Simon Game - Where the user needs to keep up with the order of pre-selected and randomised coloured button prompts. Made using the DOM with jQuery and deployed to Glitch.",
        imgUrl: simonGameProject,
        linkTitleOne: "Website",
        linkTitleTwo: "Github",
        linkTitleThree: "Glitch-Code",
        linkOne: "https://game-app-.glitch.me/",
        linkTwo: "https://github.com/KG1414/game",
        LinkThree: "https://glitch.com/edit/#!/game-app-",
        badgeOne: "React",
        badgeTwo: "JS",
        badgeThree: "jQuery",
        badgeFour: "HTML",
        badgeFive: "CSS",
        badgeSix: "",
        badgeSeven: "",
        badgeEight: "",
        badgeNine: "",
        badgeTen: ""
    },
    {
        id: 4,
        projectTitle: "Tasks App",
        subTitle: "",
        projectDescription: "Keeper Tasks App made with React and Material-UI on codesandbox.io.",
        imgUrl: keeperProject,
        linkTitleOne: "Website",
        linkTitleTwo: "Code Sandbox",
        linkOne: "https://bk7ot.csb.app/",
        linkTwo: "https://codesandbox.io/s/keeper-part-3-completed-forked-bk7ot",
        badgeOne: "React",
        badgeTwo: "JS",
        badgeThree: "Express",
        badgeFour: "CSS",
        badgeFive: "Bootstrap",
        badgeSix: "Node",
        badgeSeven: "",
        badgeEight: "",
        badgeNine: "",
        badgeTen: ""
    },
    {
        id: 5,
        projectTitle: "Journal App",
        subTitle: "",
        projectDescription: "A data persistent Journal using MongoDB, Express and EJS where the user can go to {root}/compose and write a journal entry.",
        imgUrl: journalProject,
        linkTitleOne: "Github",
        linkTitleTwo: "",
        linkOne: "https://github.com/KG1414/journal-app",
        linkTwo: "",
        badgeOne: "EJS",
        badgeTwo: "MongoDB",
        badgeThree: "Express",
        badgeFour: "API",
        badgeFive: "Bootstrap",
        badgeSix: "Lodash",
        badgeSeven: "Mongoose",
        badgeEight: "JS",
        badgeNine: "CSS",
        badgeTen: "LoDash"
    },
    {
        id: 6,
        projectTitle: "Secrets App",
        subTitle: "",
        projectDescription: "Data persistent App with a login requirement using PassportJS, Google, MongoDB, Mongoose and Express where the user can add new and anonymous secrets once logged in. If not logged in the user can still view the secrets page, but can't add to it.",
        imgUrl: secretsProject,
        linkTitleOne: "Github",
        linkTitleTwo: "",
        linkOne: "https://github.com/KG1414/security-module",
        linkTwo: "",
        badgeOne: "React",
        badgeTwo: "JS",
        badgeThree: "Express",
        badgeFour: "API",
        badgeFive: "Bootstrap",
        badgeSix: "EJS",
        badgeSeven: "PassportJS",
        badgeEight: "MongoDB",
        badgeNine: "Mongoose",
        badgeTen: ""
    }
];

export default projectData;