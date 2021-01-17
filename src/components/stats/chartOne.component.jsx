import "./chartOne.styles.css";

import reposMockData from "../../assets/mock_reposData";

var d3 = require("d3");

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



const ChartOne = ({ reposData }) => {
    

    const w = 300;
    const h = 300;

    const svg = d3.select(".chart-one")
                    .attr("width", w)
                    .attr("height", h)

    svg.selectAll("rect")
        .data(reposMockData)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 30)
        .attr("y", (d, i) => h - 3 * (d.stargazers_count + 1))
        .attr("width", 25)
        .attr("height", (d, i) => 10 * (d.stargazers_count + 1))




    return(
        <svg className="chart-one">


        </svg>
    )
}


export default ChartOne;