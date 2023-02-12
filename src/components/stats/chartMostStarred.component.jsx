import * as d3 from "d3";
import { useEffect, useState } from "react";
import "./charts.styles.css";

import colors from "../../assets/github.colors";
import { range } from "../../utils";

// import reposMockData from "../../assets/mock_reposData";

export default function ChartMostStarred({ reposData }) {
    const [reposCleanData, setReposCleanData] = useState([])
    const t = d3.transition().duration(750);

    useEffect(() => {
        setReposCleanData(
            reposData
                .map(repo => ({
                    name: repo.name,
                    language: repo.language,
                    starsCount: Number(repo.stargazers_count)
                }))
                .sort((a, b) => b.starsCount - a.starsCount)
                .slice(0, 5)
        )
    }, [reposData]);

    const MARGIN = { TOP: 60, RIGHT: 25, BOTTOM: 70, LEFT: 35 }
    const WIDTH = 300;
    const HEIGHT = 300;

    const clearHeight = HEIGHT - MARGIN.TOP - MARGIN.BOTTOM;
    const clearWidth = WIDTH - MARGIN.RIGHT - MARGIN.LEFT;

    const svg = d3.select(".chartMostStarred")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);

    const g = svg.append('g')
        .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    const tip = d3.select('body').append('div')
        .attr('class', 'tooltipMostStarred')
        .style('opacity', 0)

    const xScale = d3.scaleBand()
        .domain(reposCleanData.map(d => d.name))
        .range([0, clearWidth])
        .paddingInner(0.3) // Space between columns
        .paddingOuter(0.2);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(reposCleanData, d => d.starsCount)]) // according to the data
        .range([clearHeight, 0]) // the space we have in the canvas

    const xAxisGroup = g.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${clearHeight})`);

    const yAxisGroup = g.append('g')
        .attr('class', 'y axis')

    const xAxisCall = d3.axisBottom(xScale);
    xAxisGroup.transition(t).call(xAxisCall)
        .selectAll('text') // Bottom Axis Text
        .attr('y', 10)
        .attr('x', -5)
        .attr('text-anchor', 'end')
        .attr('transform', 'rotate(-40)');

    const yAxisCall = d3.axisLeft(yScale)
        .tickValues(range(0, d3.max(reposCleanData.map(d => d.starsCount))))
        .tickFormat(num => Math.round(num));
    yAxisGroup.transition(t).call(yAxisCall)

    // DATA JOIN.Join new data with old elements
    const rects = g.selectAll("rect").data(reposCleanData, d => d.language);

    // EXIT old elements not present in new data
    rects.exit().remove();

    // UPDATE old elements present in new data
    rects
        .transition(t)
        .attr("y", d => yScale(d.starsCount))
        .attr("x", d => xScale(d.language))
        .attr("width", xScale.bandwidth())
        .attr("height", d => clearHeight - yScale(d.language));

    // ENTER new elements present in new data
    rects.enter().append("rect")
        .attr("width", xScale.bandwidth())
        .attr("height", 0)
        .attr("x", (d) => xScale(d.name))
        .attr("y", yScale(0))
        .attr("fill", (d) => colors[d.language])
        .on('mouseover', (d, entry) => {
            const { clientX, clientY } = d;
            const { language, name, starsCount } = entry;

            const tooltip = tip.style('opacity', 1)
                .html(`<p style="text-transform: uppercase"><strong>${name}</strong></p>
                <p>Language: <strong>${language}</strong></p>
                <p>Stars Count: <strong>${starsCount}</strong></p>`)

            const { offsetWidth, offsetHeight } = tooltip._groups[0][0]

            tooltip
                .style("left", `${clientX - offsetWidth / 2}px`)
                .style("top", `${clientY - offsetHeight - 10}px`)
        })
        .on("mouseout", () => {
            tip.style("opacity", 0)
        })
        .transition(t)
        .delay(1000)
        .attr("y", d => yScale(d.starsCount))
        .attr("height", d => clearHeight - yScale(d.starsCount))

    return <svg className="chartMostStarred" />
}
