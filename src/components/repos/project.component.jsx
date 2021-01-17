import "./project.styles.css";
import colors from "../../assets/github.colors";

const Project = ({ item , id }) => {
    const { name, forks, html_url, language, size, stargazers_count, created_at, description } = item
    const iconSize = "fa-sm"
    return(
        <div key={ id } className="project-container" >
            <div className="project-main">
                <div className="top-line">
                    <h4 className="project-title">{ name }</h4>
                    <a href={ html_url } default="_blanck"><i className="fas fa-external-link-alt link-icon"></i></a>
                </div>
                <div className="middle-line">
                    <p className="project-description">{ description }</p>
                </div>
                <div className="bottom-line">
                    <p className="project-language"> <i className={"fas fa-circle " + iconSize} style={{ color: colors[language] }}></i> { language }</p>
                    <p className="project-stars"> <i className={"fas fa-star " + iconSize}></i> { stargazers_count }</p>
                    <p className="project-forks"> <i className={"fas fa-code-branch " + iconSize}></i> { forks }</p>
                    <p className="project-size">{ size } KB</p>
                </div>

            </div>
        </div>
    )
}

export default Project;