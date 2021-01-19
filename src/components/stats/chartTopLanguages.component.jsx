import React, { useState, useEffect } from "react";
import "./charts.styles.css";
import colors from "../../assets/github.colors";
import * as d3 from "d3";

// import reposMockData from "../../assets/mock_reposData";


const ChartTopLanguages = ({ reposData }) => {
    const [newData, setNewData] = useState([])

    useEffect(() => {
        setNewData([...reposData])
    }, [reposData])

    // console.log("newData", newData)

    const topLanguages = {}
    const arrTopLanguages = []

    for (let repo of newData) {
        if (repo.language == null ) {
            console.log(repo.language, repo.name)
        }else if (!topLanguages[repo.language]) {
            topLanguages[repo.language] = 1;
        } else {
            topLanguages[repo.language] = topLanguages[repo.language] + 1
        }
        // console.log("repo.language: ",repo.language)
    }
    for (let repo in topLanguages) arrTopLanguages.push({ language: repo, stars: topLanguages[repo] })
    // console.log("topLanguages: ", topLanguages)
    // console.log("arrTopLanguages: ", arrTopLanguages)

    // CANVAS CIRCLE
    const w = 300;
    const h = 250;

    // CANVAS CIRCLE
    const cw = 250;
    const ch = 250;
    const padding = 40;
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
        .attr("transform", `translate(${(cw / 2) - padding / 2} ,${(h / 2) + padding})`)
        .selectAll("path")
        .data(data);

    sections.enter()
        .append("path")
        .attr("d", segments)
        .attr("fill", d => colors[d.data.language]);

    // const content = d3.select("g")
    //     .selectAll("text")
    //     .data(data)

    // content.enter()
    //     .append("text")
    //     .each(function (d) {
    //         let center = segments.centroid(d);
    //         d3.select(this)
    //             .attr("x", center[0])
    //             .attr("y", center[1])
    //             .text(d.data.language)
    //             .classed("top-text", true);
    //     });
    
    const legends = svg.append("g")
        .attr("transform", `translate(${cw - padding - 8}, ${padding})`)
        .selectAll(".legends")
        .data(data)
    
    const legend = legends.enter()
        .append("g")
        .classed("legends", true)
        .attr("transform", (d, i) => `translate(${0}, ${(i + 1) * 20} )`)
    
    legend.append("rect")
        .attr("width", 15)
        .attr("height", 10)
        .attr("fill", d => colors[d.data.language]);

    legend.append("text")
        .text((d) => d.data.language)
        .attr("fill", "white")
        .attr("x", 20)
        .attr("y", 10)
        .classed("legend-text", true)




    return (
        <svg className="chartTopLanguages">

        </svg>
    )
}


export default ChartTopLanguages;