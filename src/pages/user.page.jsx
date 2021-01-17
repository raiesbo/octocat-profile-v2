import React, { useState, useEffect } from "react";
import Profile from "../components/profile.component";
import Footer from "../components/footer.component";
import Stats from "../components/stats.component";
import Repos from "../components/repos.component";
import { Redirect } from "react-router-dom";
// import axios from 'axios';
import "./user.styles.css";


const User = ({ username }) => {

    const [userData, setUserData] = useState([]);
    const [reposData, setReposData] = useState([]);


    useEffect(() => {
        const url = "http://localhost:5000/"

        fetch(`${url}users?id=${username}`)
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

            // let message;
            // if (reposData.message) {
            //     message = "API rate limit exceeded"
            // } else {
            //     message = "You should enter a valid Username"
            // }

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
                    <Stats userData={userData} />
                    <Repos reposData={reposData} />
                    <Footer />
                </div>
            )
        }
    }

    return (
        <div>
            {/* <div className="user-container"></div> */}
            {/* <Switch>
                { !userData.message == "Not Found" ? <Redirect to="/" /> : null }
            </Switch> */}


            {/* <Profile userData={ userData } />
            <Stats userData={ userData }/>
            <Repos reposData={ reposData } />
            <Footer /> */}
            {renderUserData()}
            {/* </div>    */}
        </div>

    )
}


export default User;