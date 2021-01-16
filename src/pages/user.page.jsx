import React, { useState, useEffect } from "react";
import Profile from "../components/profile.component";
import Footer from "../components/footer.component";
import Stats from "../components/stats.component";
import Repos from "../components/repos.component";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import "./user.styles.css";
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";


const User = ({ username }) => {

    const [userData, setUserData ] = useState([]);
    const [reposData, setReposData ] = useState([]);


    useEffect(() => {
        const url="http://localhost:5000/"
        axios.get(`${url}users?id=${username}`)
            .then(resData => {
                // if (!userData.message == "Not Found") {
                //     return (
                //         <Switch>
                //             <Redirect to="/" push/>
                //         </Switch>
                //     )
                // } 

                console.log("userData: ", resData.data.body[0])
                console.log("reposData: ", resData.data.body[1])
                setReposData(resData.data.body[1])
                return setUserData(resData.data.body[0])
            })
            .catch(err => console.error("here we go!!!", err));
        
    }, []);

    const renderUserData = () => {
        if (userData.length != 3) {
            return (
                    <Redirect to="/" />
            )
            
        } else {
            return (
                <div className="user-container">
                    <Profile userData={ userData } />
                    <Stats userData={ userData }/>
                    <Repos reposData={ reposData } />
                    <Footer />
                </div>
            )
        }
    }

    return(
        <div>
        
            {/* <Switch>
                { !userData.message == "Not Found" ? <Redirect to="/" /> : null }
            </Switch> */}
 

            {/* <Profile userData={ userData } />
            <Stats userData={ userData }/>
            <Repos reposData={ reposData } />
            <Footer /> */}
            {renderUserData()}
            
        </div>
        
    )
}


export default User;