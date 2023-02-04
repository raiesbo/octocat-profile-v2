import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Footer from "../components/footer/footer.component";
import Loading from "../components/loading/loading.component";
import Profile from "../components/profile/profile.component";
import Repos from "../components/repos/repos.component";
import Stats from "../components/stats/stats.component";
import "./user.styles.css";


export default function User({ username }) {
    const [userData, setUserData] = useState([]);
    const [reposData, setReposData] = useState([]);

    useEffect(() => {
        // const url = "http://localhost:5000/"
        const url = "https://global-dashboard.vercel.app"

        fetch(`${url}/api/github/${username}`)
            .then(response => response.json())
            .then(data => {
                setReposData(data.reposData)
                setUserData(data.userData)
            })
            .catch(err => console.error("here we go!!!", err));

    }, [username]);

    const renderUserData = () => {
        if (username === "" || reposData === undefined) {
            return (
                <Redirect from="/user" to="/?error=You should enter a valid Username" />
            )
        } else if (reposData.message) {
            return (
                <Redirect from="/user" to="/?error=API rate limit exceeded" />
            )
        } else {
            return (
                <div className="user-container">
                    <Profile userData={userData} />
                    <Stats reposData={reposData} />
                    <Repos reposData={reposData} />
                    <Footer />
                </div>
            )
        }
    }

    return (
        <div>
            {reposData.length <= 0 ? <Loading /> : renderUserData()}
        </div>
    )
}
