import projectImgOne from "../images/call-of-dragons.webp";
import projectImgTwo from "../images/weavers-job.webp";
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
            technologies: ["HTML", "CSS", "JS", "JQuery", "Handlebars", "Node.js", "Express", "AWS S3 Bucket", "Photopea"],
            demo: null,
            code: "https://github.com/swe-thinhnguyen1701/call-of-dragons",
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