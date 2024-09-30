import projectImgOne from "../images/call-of-dragons.webp";
import projectImgTwo from "../images/weavers-job.webp";
import projectImgThree from "../images/jate.webp";
import projectImgFour from "../images/game-gaze.webp";
import projectImgFive from "../images/portfolio-v1.webp";
import projectImgSix from "../images/tealicious.webp";


import ProjectCard from "../components/ProjectCard";

const PROJECT_ARRAY = [
    {
        img: {
            url: projectImgOne,
            description: "Call of Dragons project image"
        },
        info: {
            title: "Call of Dragons",
            description: "The Call of Dragons Companion Website is a project I initiated to fill the gap left by the lack of a comprehensive online resource for players of the game Call of Dragons. This website is designed to provide detailed information on various aspects of the game, including: version details, hero information, simulation talent tree, and cost-saving tips.",
            technologies: ["React", "JS", "Photopea", "AWS S3", "MongoDB", "GraphQL", "Apollo", "Apollo Client", "Node.js", "Express"],
            demo: null,
            code: "https://github.com/swe-thinhnguyen1701/call-of-dragons",
        }
    },
    {
        img: {
            url: projectImgSix,
            description: "Tealicious project image"
        },
        info: {
            title: "Tealicious",
            description: "Tealicious is an e-commerce website offers users the ability to browse and purchase a wide variety of teas with ease. Whether you're a casual guest or a registered member, you'll enjoy a seamless and interactive shopping experience powered by modern web technologies. ",
            technologies: ["AWS S3", "React", "Apollo", "Node.js", "MongoDB", "GraphQL", "Stripe"],
            demo: "https://tealicious.onrender.com/",
            code: "https://github.com/swe-thinhnguyen1701/TeaLicious",
        }
    },
    {
        img: {
            url: projectImgTwo,
            description: "Weavers Job project image"
        },
        info: {
            title: "Weavers Job",
            description: "I created this website with the intention of providing users as a job seekers to find their desire job and also providing users as a recruiter to post a job to find talent employee.",
            technologies: ["Handlebars", "PostgreSQL", "Node.js", "Express", "Multer", "CSS", "JS"],
            demo: "https://weaversjob.onrender.com",
            code: "https://github.com/swe-thinhnguyen1701/job-board",
        }
    },
    {
        img: {
            url: projectImgThree,
            description: "Jate project image"
        },
        info: {
            title: "J.A.T.E",
            description: "Just Another Text Editor (J.A.T.E) is a Progressive Web App (PWA) that allows you to edit and save text files offline. It features a clean, intuitive interface and supports installation on your device for a native-like experience.",
            technologies: ["HTML", "CSS", "JS", "Webpack", "Workbox", "Babel", "Concurrently"],
            demo: "https://text-editor-ofqn.onrender.com",
            code: "https://github.com/swe-thinhnguyen1701/text-editor",
        }
    },
    {
        img: {
            url: projectImgFour,
            description: "Game Gaze project image"
        },
        info: {
            title: "Game Gaze",
            description: `Just Another Text Editor (J.A.T.E) is a Progressive Web App (PWA) that allows you to edit and save text files offline. It features a clean, intuitive interface and supports installation on your device for a native-like experience.`,
            technologies: ["HTML", "CSS", "JS", "JQuery"],
            demo: "https://bragonese1.github.io/game-gaze/",
            code: "https://github.com/bragonese1/game-gaze?tab=readme-ov-file",
        }
    },
    {
        img: {
            url: projectImgFive,
            description: "Portfolio project version 1.0 image"
        },
        info: {
            title: "Portfolio v1",
            description: `My first portfolio`,
            technologies: ["HTML", "CSS", "JS"],
            demo: "https://swe-thinhnguyen1701.github.io/portfolio/",
            code: "https://github.com/swe-thinhnguyen1701/portfolio",
        }
    }
]

function Project() {
    return (
        <section className="section">
            {PROJECT_ARRAY.map((project, index) => {
                return (
                    <ProjectCard
                        key={index}
                        img={project.img}
                        project={project.info}
                    />
                )
            })}
        </section>
    )
}

export default Project;