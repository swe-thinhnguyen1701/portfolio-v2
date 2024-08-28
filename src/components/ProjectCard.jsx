import PropTypes from "prop-types";
import Badge from "./Badge"

function ProjectCard ({img, project}) {
    return (
        <div className="project-card">
            <div className="img-container">
                <img src={img.url} alt={img.description} />
            </div>
            <div className="project-card-header">
                <h3>{project.title}</h3>
                <div className="project-card-controller">
                    <a className="link link-btn">DEMO</a>
                    <a className="link link-btn">CODE</a>
                </div>
            </div>
            <div className="project-card-body">
                <p>{project.description}</p>
            </div>
            <div className="project-card-footer">
                {project.technologies.map((technology, index) => (
                    <Badge key={index} content={technology} />
                ))}
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    img: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired
}

export default ProjectCard;