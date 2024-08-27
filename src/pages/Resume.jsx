import resume from "../assets/CHARLES-RESUME-portfolio.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const SKILL_LIST = [
    {
        title: "Programming Languages",
        skills: ["Java", "Python", "HTML", "CSS", "TypeScript", "JavaScript", "Lua"]
    },
    {
        title: "Frontend",
        skills: ["JQuery", "React", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Node.JS", "Express"]
    },
    {
        title: "Database",
        skills: ["PostgreSQL", "MongoDB", "AWS DynamoDB"]
    },
    {
        title: "Technologies",
        skills: ["AWS: S3 Bucket", "API Gateway", "Lambda"]
    },
    {
        title: "Languages",
        skills: ["English", "Vietnamese"]
    }
]

function Resume() {
    return (
        <section className="section">
            <div className="resume">
                <h3>SKILLS</h3>
                <ul className="list">
                    {SKILL_LIST.map((skill, index) => (
                        <li key={index} className="list-item">
                            <span className="bold ">{skill.title}: </span>
                            {skill.skills.join(", ")}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="resume">
                <h3>EDUCATION</h3>
                <div className="resume-education-container">
                    <div className="time-line"></div>
                    <div className="education">
                        <div className="education-time">Sep 2017 - Jun 2019</div>
                        <FontAwesomeIcon icon={faGraduationCap} className="icon education-icon" />
                        <div className="education-info">
                            <div className="bold education-school">De Anza College</div>
                            <div>
                                <span className="italic">A.A.S</span> Computer Science <br />
                                <span className="italic">Certificate</span> Programming in Unix/Linux Operating System
                            </div>
                            <div>
                                Candidate for Associated of Applied Science in Computer Science
                            </div>
                            <div className="education-time-inner">Sep 2017 - Jun 2019</div>
                        </div>
                    </div>
                    <div className="education">
                        <div className="education-time">Sep 2019 - May 2022</div>
                        <FontAwesomeIcon icon={faGraduationCap} className="icon education-icon" />
                        <div className="education-info">
                            <div className="bold education-school">San Jose State University</div>
                            <div>
                                <span className="italic">B.S</span> Applied Mathematics <br />
                            </div>
                            <div>
                                Candidate for Bachelor of Science in Applied Mathematics with emphasis in Software Engineering.
                            </div>
                            <div className="education-time-inner">Sep 2019 - May 2022</div>
                        </div>
                    </div>
                    <div className="education">
                        <div className="education-time">Mar - Sep 2024</div>
                        <FontAwesomeIcon icon={faGraduationCap} className="icon education-icon" />
                        <div className="education-info">
                            <div className="bold education-school">UC Berkeley</div>
                            <div>
                                <span className="italic">Certificate</span> Full-Stack Development <br />
                            </div>
                            <div>
                                Hands-on experience with real full-stack projects, focusing on latest technologies like React, Node.js, MongoDB, JQuery, and PostgreSQL.
                            </div>
                            <div className="education-time-inner">Mar - Sep 2024</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="download-container">
                <a href={resume} download className="link">Download My Resume</a>
                <FontAwesomeIcon icon={faFilePdf} className="icon" />
            </div>
        </section>
    )
}

export default Resume;