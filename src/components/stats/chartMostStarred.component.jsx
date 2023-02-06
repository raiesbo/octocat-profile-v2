import * as d3 from "d3";
import React, { useEffect, useState } from "react";
import "./charts.styles.css";

import colors from "../../assets/github.colors";

// import reposMockData from "../../assets/mock_reposData";

const ChartMostStarred = ({ reposData }) => {
    const [newData, setNewData] = useState([])

    useEffect(() => {
        setNewData([...reposData])
    }, [reposData])

    const mostStarred = newData.map(repo => ({ name: repo.name, lang: repo.language, starsNum: repo.stargazers_count }))

    const sortedMostStarred = mostStarred.sort((a, b) => b.starsNum - a.starsNum).slice(0, 5)

    const w = 350;
    const h = 300;
    const padding = 60;

    const xScale = d3.scaleBand()
        .domain(sortedMostStarred.map(i => i.name))
        .rangeRound([padding, w - padding]) // works in pixels
        .padding(0.2); // padding between bars

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(sortedMostStarred, d => d.starsNum)]) // according to the data
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
        .attr("height", (d) => h - padding - yScale(d.starsNum))
        .attr("x", (d) => xScale(d.name))
        .attr("y", (d) => yScale(d.starsNum))
        .attr("fill", (d) => colors[d.lang])
        .attr("class", "bars") // still need to define ".bars" in css
        .append("title")
        .text((d) => `${d.lang}`)


    // svg.selectAll("text")
    //     .data(sortedMostStarred)
    //     .enter()
    //     .append("text")
    //     .text((d) => d[0])
    //     .attr("x", (d) => xScale(d[0]))
    //     .attr("y", h - padding)
    //     .attr("transform", "rotate(90deg)")

    const axis = Array.from(new Set(mostStarred.map(d => d.starsNum).sort()))

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale).tickValues(axis).tickFormat(d3.format('.3'))

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

    return (
        <svg className="chartMostStarred"></svg>
    )
}

export default ChartMostStarred;
