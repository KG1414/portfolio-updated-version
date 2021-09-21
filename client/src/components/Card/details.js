import firebase from '../../assets/images/logo_firebase.png';
import mongooseLogo from '../../assets/images/pngfind.com-js-logo-png-4309574.png';

// If importing a logo file or url use <imgURL> and leave <classDec> blank.
// If using classes use <classDec> and the value for <imgURL> should be changed to null.

const details = [
    {
        id: 1,
        imgURL: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?resize=780,408",
        imgWidth: "300px",
        title: "MongoDB",
        description: "Document-oriented NoSQL database management program with scalability and flexibility.",
        classDec: "",
        placeholder: "mongodb"
    },
    {
        id: 2,
        imgURL: "https://buttercms.com/static/images/tech_banners/ExpressJS.8587dd0647ca.png",
        imgWidth: "120px",
        title: "ExpressJS",
        description: "Back end web application framework for Node.js for building web applications and API's.",
        classDec: "",
        placeholder: "express-js"
    },
    {
        id: 3,
        imgURL: null,
        imgWidth: "",
        title: "React.js",
        description: "A front-end Javascript library for building user interfaces or UI components in declarative code.",
        classDec: "fab fa-react fa-4x icn-spinner",
        placeholder: "react"
    },
    {
        id: 4,
        imgURL: null,
        imgWidth: "",
        title: "Node.js",
        description: "An open-source, cross-platform, back-end Javascript runtime environment.",
        classDec: "fab fa-node fa-4x",
        placeholder: "node-js"
    },
    {
        id: 5,
        imgURL: null,
        imgWidth: "",
        title: "Bootstrap",
        description: "Bootstrap, a sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development..",
        classDec: "fab fa-bootstrap fa-4x",
        placeholder: "bootstrap"
    },
    {
        id: 5,
        imgURL: null,
        imgWidth: "",
        title: "Javascript",
        description: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages.",
        classDec: "fab fa-js-square fa-4x",
        placeholder: "javascript"
    },
    {
        id: 7,
        imgURL: firebase,
        imgWidth: "60px",
        title: "Firebase",
        description: "The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync data between your users in realtime.",
        classDec: "",
        placeholder: "firebase-logo"
    },
    {
        id: 8,
        imgURL: mongooseLogo,
        imgWidth: "140px",
        title: "Mongoose JS",
        description: "Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.",
        classDec: "",
        placeholder: ""
    }
];

export default details;


