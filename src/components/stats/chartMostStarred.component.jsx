import "./charts.styles.css";
import * as d3 from "d3";

import colors from "../../assets/github.colors";

import reposMockData from "../../assets/mock_reposData";

const ChartMostStarred = ({ reposData }) => {

    const mostStarred = []
    for (let repo of reposData) {
        mostStarred.push([repo.name, repo.language, repo.stargazers_count])
    }
    const sortedMostStarred = mostStarred.sort((a, b) => b[2] - a[2]).slice(0, 5)
    // console.log("mostStarred: ", mostStarred.sort((a, b) => b[2] - a[2]).slice(0, 5))

    const w = 350;
    const h = 300;
    const padding = 60;

    const xScale = d3.scaleBand()
                    .domain(sortedMostStarred.map(i => i[0]))
                    .rangeRound([padding, w - padding]) // works in pixels
                    .padding(0.2); // padding between bars

    const yScale = d3.scaleLinear()
                        .domain([0, d3.max(sortedMostStarred, (d) => d[2])]) // according to the data
                        .range([h - padding, padding]) // the space we have in the canvas


    const svg = d3.select(".chartMostStarred")
                    .attr("width", w)
                    .attr("height", h)
                    .attr("background-color", "white")


    svg.selectAll("rect")
        .data(sortedMostStarred)
        .enter()
        .append("rect")
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => h - padding - yScale(d[2]))
        .attr("x", (d) => xScale(d[0]))
        .attr("y", (d) => yScale(d[2]))
        .attr("fill", (d) =>  colors[d[1]])
        .attr("class", "bars") // still need to define ".bars" in css
        .append("title")
        .text((d) => `${d[1]}`)


    // svg.selectAll("text")
    //     .data(sortedMostStarred)
    //     .enter()
    //     .append("text")
    //     .text((d) => d[0])
    //     .attr("x", (d) => xScale(d[0]))
    //     .attr("y", h - padding)
    //     .attr("transform", "rotate(90deg)")

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    svg.append("g")
        .attr('transform', `translate(0, ${h - padding})`)
        .call(xAxis)
        .selectAll("text")
        .attr("y", 10)
        .attr("x", 0)
        .attr("transform", "rotate(-30)")
        .style("text-anchor", "end");

    svg.append("g")
        .attr("transform", "translate(" + padding + ", 0)")
        .call(yAxis)



    
    return(
        <svg className="chartMostStarred">

        </svg>
    )
}


export default ChartMostStarred;