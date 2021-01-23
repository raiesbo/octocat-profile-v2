import React, { useState } from "react";
import Project from "./project.component";
import "./repos.styles.css";


const Repos = ({ reposData }) => {

    const [sortingItem, serSortingItem] = useState("stargazers_count");

    const handleSorting = (e) => {
        e.preventDefault();
        const val = e.target.value
        console.log("value", e.target.value)
        serSortingItem(val)
    }


    return (
        <div className="repos-container">

            <div className="repos-main">

                <label for="sorting" className="sectiont-itle">Top Repositories
                    <select id="sorting" className="input-selection" onChange={handleSorting}>
                        <option value="stargazers_count" >by Stars:</option>
                        <option value="forks" >by Forks:</option>
                        <option value="size" >by Bytes:</option>
                    </select>
                </label>

                <div className="projects-container">

                    {
                        reposData
                            .sort((a, b) => b[sortingItem] - a[sortingItem])
                            .slice(0, 8)
                            .map((item, id) => <Project item={item} key={id} />)
                    }

                </div>
            </div>
        </div>

    )
}


export default Repos;