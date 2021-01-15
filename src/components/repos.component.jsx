import React, { useState } from "react";
import Project from "./project.component";
import "./repos.styles.css";
import "./project.styles.css";


const Repos = ({ reposData }) => {
    const [ sortedRepos, setSortedRepos ] = useState([...reposData])
    
    const handleSorting = (e) => {
        e.preventDefault();
        const val = e.target.value
        console.log("value", e.target.value)
        setSortedRepos([...reposData].sort((a, b) =>(a[val] - b[val]) ? 1 : -1 ))
    }
    
    return (
        <div className="repos-container">

            <div className="repos-main">

                <label for="sorting">Top Repositories 
                    <select id="sorting" className="input-selection" onChange={handleSorting}>
                        <option value="stargazers_count" >by Starts</option>
                        <option value="forks" >by Forks</option>
                        <option value="size" >by Bytes</option>
                    </select>
                :</label>

                <div className="projects-container">

                    {
                    sortedRepos ? sortedRepos
                        .slice(0, 8)
                        .map((item, id) => <Project item={ item } key={ id } />) : <p>Sorry, try it later.</p>
                    }

                </div>
            </div>
        </div> 
        
    )
}


export default Repos;