import * as d3 from "d3";
import { useEffect, useState } from "react";
import colors from "../../assets/github.colors";
import "./charts.styles.css";

// import reposMockData from "../../assets/mock_reposData";

export default function ChartTopLanguages({ reposData }) {
    const [newData, setNewData] = useState([])

    useEffect(() => {
        setNewData([...reposData])
    }, [reposData])

    const topLanguages = {}
    const arrTopLanguages = []

    for (let repo of newData) {
        if (repo.language == null) {
            // console.log(repo.language, repo.name)
        } else if (!topLanguages[repo.language]) {
            topLanguages[repo.language] = 1;
        } else {
            topLanguages[repo.language] = topLanguages[repo.language] + 1
        }
    }

    for (let repo in topLanguages) arrTopLanguages.push({ language: repo, stars: topLanguages[repo] })

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
        .attr("height", h);

    const data = d3.pie().sort(null).value(d => d.stars)(arrTopLanguages);

    const tip = d3.select('body').append('div')
        .attr('class', 'tooltipTopLanguages')
        .style('opacity', 0);

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
        .attr("fill", d => colors[d.data.language])
        .on('mouseover', (d, entry) => {
            const { clientX, clientY } = d;
            const { language, stars } = entry.data;

            const tooltip = tip.style('opacity', 1)
                .html(`<p style="text-transform: uppercase"><strong>${language}</strong></p>
                <p>Repos Count: <strong>${stars}</strong></p>`)

            const { offsetWidth, offsetHeight } = tooltip._groups[0][0]

            tooltip
                .style("left", `${clientX - offsetWidth / 2}px`)
                .style("top", `${clientY - offsetHeight - 10}px`)
        })
        .on("mouseout", () => {
            tip.style("opacity", 0)
        })

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

    return <svg className="chartTopLanguages" />
}
