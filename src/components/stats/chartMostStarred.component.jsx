import * as d3 from "d3";
import { useEffect, useState } from "react";
import "./charts.styles.css";

import colors from "../../assets/github.colors";

// import reposMockData from "../../assets/mock_reposData";

export default function ChartMostStarred({ reposData }) {
    const [reposCleanData, setReposCleanData] = useState([])

    useEffect(() => {
        setReposCleanData(
            [...reposData]
                .map(repo => ({ name: repo.name, lang: repo.language, starsCount: repo.stargazers_count }))
                .sort((a, b) => b.starsCount - a.starsCount)
                .slice(0, 5)
        )
    }, [reposData]);

    const MARGIN = { TOP: 0, RIGHT: 0, BOTTOM: 60, LEFT: 60 }
    const WIDTH = 350;
    const HEIGHT = 300;
    const padding = 60;

    const clearHeight = HEIGHT - MARGIN.TOP - MARGIN.BOTTOM;
    const clearWidth = WIDTH - MARGIN.RIGHT - MARGIN.LEFT;

    const xScale = d3.scaleBand()
        .domain(reposCleanData.map(i => i.name))
        .rangeRound([padding, clearWidth]) // works in pixels
        .padding(0.2); // padding between bars

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(reposCleanData, d => d.starsCount)]) // according to the data
        .range([clearHeight, padding]) // the space we have in the canvas

    const svg = d3.select(".chartMostStarred")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("background-color", "white")

    svg.selectAll("rect")
        .data(reposCleanData)
        .enter()
        .append("rect")
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => HEIGHT - padding - yScale(d.starsCount))
        .attr("x", (d) => xScale(d.name))
        .attr("y", (d) => yScale(d.starsCount))
        .attr("fill", (d) => colors[d.lang])
        .attr("class", "bars") // still need to define ".bars" in css
        .append("title")
        .text((d) => `${d.lang}`)

    const axis = Array.from(new Set(reposCleanData.map(d => d.starsCount).sort()));

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale).tickValues(axis).tickFormat(d3.format('.3'));

    svg.append("g")
        .attr('transform', `translate(0, ${HEIGHT - padding})`)
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
