import "./charts.styles.css";
import * as d3 from "d3";

import reposMockData from "../../assets/mock_reposData";



// const w = 300;
// const h = 300;

// const svg = d3.select(".chart-one")
//                 .attr("width", w)
//                 .attr("height", h)

// svg.selectAll("rect")
//     .data(reposMockData)
//     .enter()
//     .append("rect")
//     .attr("x", (d, i) => i * 30)
//     .attr("y", (d, i) => h - 3 * d.stargazers_count)
//     .attr("width", 25)
//     .attr("height", (d, i) => 3 * d.stargazers_count)



const ChartTopLanguages = ({ reposData }) => {
    const topLanguages = {}
    const arrTopLanguages = []
    for (let repo of reposMockData) {
        if (!topLanguages[repo.language]) {
            topLanguages[repo.language] = 1;
        } else {
            topLanguages[repo.language] = topLanguages[repo.language] + 1
        }
    }
    for (let repo in topLanguages) arrTopLanguages.push({[repo]: topLanguages[repo]})
    console.log("topLanguages: ", topLanguages)
    console.log("arrTopLanguages: ", arrTopLanguages)
    
    // MAIN CIRCLE
    const w = 300;
    const h = 300;
    const r = Math.min(w, h) / 2

    const svg = d3.select(".chartTopLanguages")
        .attr("width", w)
        .attr("height", h)
        .style("background-color", "red")



    return(
        <svg className="chartTopLanguages">

        </svg>
    )
}


export default ChartTopLanguages;