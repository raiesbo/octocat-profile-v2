import React, { useState, useEffect } from "react";
import Profile from "../components/profile/profile.component";
import Footer from "../components/footer/footer.component";
import Stats from "../components/stats/stats.component";
import Repos from "../components/repos/repos.component";
import { Redirect } from "react-router-dom";
import "./user.styles.css";


const User = ({ username }) => {

    const [userData, setUserData] = useState([]);
    const [reposData, setReposData] = useState([]);


    useEffect(() => {
        // const url = "http://localhost:5000/"
        const url = "https://octocatprofiler-server.herokuapp.com/"

        fetch(`${url}user?id=${username}`)
            .then(response => response.json())
            .then(resData => {
                console.log("userData: ", resData.body[0])
                console.log("reposData: ", resData.body[1])
                console.log("reposData: ", resData.body)

                setReposData(resData.body[1])
                return setUserData(resData.body[0])
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

            {renderUserData()}

        </div>

    )
}


export default User;