import "./charts.styles.css";
import colors from "../../assets/github.colors";
import * as d3 from "d3";

import reposMockData from "../../assets/mock_reposData";


const ChartTopLanguages = ({ reposData }) => {

    const topLanguages = {}
    const arrTopLanguages = []

    for (let repo of reposMockData/*to change for "reposData" once finished*/) {
        if (!topLanguages[repo.language]) {
            topLanguages[repo.language] = 1;
        } else {
            topLanguages[repo.language] = topLanguages[repo.language] + 1
        }
    }
    for (let repo in topLanguages) arrTopLanguages.push({ language: repo, stars: topLanguages[repo] })
    console.log("topLanguages: ", topLanguages)
    console.log("arrTopLanguages: ", arrTopLanguages)

    // CANVAS CIRCLE
    const w = 300;
    const h = 300;

    // CANVAS CIRCLE
    const cw = 300;
    const ch = 300;
    const padding = 20;
    const r = Math.min(cw, ch) / 2 - padding

    const svg = d3.select(".chartTopLanguages")
        .attr("width", w)
        .attr("height", h)
        // .style("background-color", "red")

    const data = d3.pie().sort(null).value(d => d.stars)(arrTopLanguages)
    // console.log("data", data)
    const segments = d3.arc()
        .innerRadius(r / 2)
        .outerRadius(r)
        .padAngle(0.1)
        .padRadius(50);

    const sections = svg.append("g")
        .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")
        .selectAll("path")
        .data(data);

    sections.enter()
        .append("path")
        .attr("d", segments)
        .attr("fill", d => colors[d.data.language]);

    const content = d3.select("g")
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .each(function (d) {
            let center = segments.centroid(d);
            d3.select(this)
                .attr("x", center[0])
                .attr("y", center[1])
                .text(d.data.language)
                .classed("top-text", true);
        });
    








    return (
        <svg className="chartTopLanguages">

        </svg>
    )
}


export default ChartTopLanguages;