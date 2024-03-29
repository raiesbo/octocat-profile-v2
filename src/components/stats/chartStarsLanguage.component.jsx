import * as d3 from "d3";
import { useEffect, useState } from "react";
import colors from "../../assets/github.colors";
import "./charts.styles.css";

// import reposMockData from "../../assets/mock_reposData";

export default function ChartStarsLanguage({ reposData }) {
    const [newData, setNewData] = useState([])
    useEffect(() => {
        setNewData([...reposData])
    }, [reposData])

    const starsLanguage = {}
    const arrStarsLanguage = []

    for (let repo of newData) {
        if (repo.language == null || repo.stargazers_count === 0) {
            // console.log(repo.language, repo.name)
        } else if (!starsLanguage[repo.language]) {
            starsLanguage[repo.language] = repo.stargazers_count
        } else {
            starsLanguage[repo.language] = starsLanguage[repo.language] + repo.stargazers_count
        }
    }

    for (let lang in starsLanguage) {
        arrStarsLanguage.push({ language: lang, stars: starsLanguage[lang] })
    }

    // CANVAS CIRCLE
    const w = 300;
    const h = 250;

    // CANVAS CIRCLE
    const cw = 250;
    const ch = 250;
    const padding = 40;
    const r = Math.min(cw, ch) / 2 - padding

    const svg = d3.select(".chartStarsLanguage")
        .attr("width", w)
        .attr("height", h);

    const data = d3.pie().sort(null).value(d => d.stars)(arrStarsLanguage);

    const tip = d3.select('body').append('div')
        .attr('class', 'tooltipStarsLanguage')
        .style('opacity', 0);

    const segments = d3.arc()
        .innerRadius(0)
        .outerRadius(r)
        .padAngle(0.1)
        .padRadius(0);

    const sections = svg.append("g")
        .attr("transform", `translate(${(cw / 2) - padding / 2} ,${(h / 2) + padding})`)
        .selectAll("path")
        .data(data);

    sections.enter().append("path")
        .attr("d", segments)
        .attr("fill", d => colors[d.data.language])
        .classed("pizza", true)
        .on('mouseover', (d, entry) => {
            const { clientX, clientY } = d;
            const { language, stars } = entry.data;

            const tooltip = tip.style('opacity', 1)
                .html(`<p style="text-transform: uppercase"><strong>${language}</strong></p>
                <p>Stars Count: <strong>${stars}</strong></p>`)

            const { offsetWidth, offsetHeight } = tooltip._groups[0][0]

            tooltip
                .style("left", `${clientX - offsetWidth / 2}px`)
                .style("top", `${clientY - offsetHeight - 10}px`)
        })
        .on("mouseout", () => {
            tip.style("opacity", 0)
        })

    const legends2 = svg.append("g")
        .attr("transform", `translate(${cw - padding - 8}, ${padding})`)
        .selectAll(".legends2")
        .data(data)

    const legend2 = legends2.enter()
        .append("g")
        .classed("legends2", true)
        .attr("transform", (d, i) => `translate(${0}, ${(i + 1) * 20} )`)

    legend2.append("rect")
        .attr("width", 15)
        .attr("height", 10)
        .attr("fill", d => colors[d.data.language]);

    legend2.append("text")
        .text((d) => d.data.language)
        .attr("fill", "white")
        .attr("x", 20)
        .attr("y", 10)
        .classed("legend-text", true)

    return <svg className="chartStarsLanguage" />
}
