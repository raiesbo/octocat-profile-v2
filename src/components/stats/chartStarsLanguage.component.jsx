import "./charts.styles.css";
import * as d3 from "d3";

import reposMockData from "../../assets/mock_reposData";

const ChartStarsLanguage = ({ reposData }) => {

    const starsLanguage = {}
    for (let repo of reposMockData) {
        if (!starsLanguage[repo.language]) {
            starsLanguage[repo.language] = repo.stargazers_count
        } else {
            starsLanguage[repo.language] = starsLanguage[repo.language] + repo.stargazers_count
        }
    }
    console.log("starsLanguage: ", starsLanguage)

    return(
        <svg className="chartStarsLanguage">

        </svg>
    )
}


export default ChartStarsLanguage;