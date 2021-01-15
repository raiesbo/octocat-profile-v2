import React, { useState, useEffect } from "react";
import Profile from "../components/profile.component";
import Footer from "../components/footer.component";
import Stats from "../components/stats.component";
import Repos from "../components/repos.component";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import "./user.styles.css";

// const axios = require('axios');

const User = ({ username }) => {

    const [user, setUser ] = useState(username);
    const [userData, setUserData ] = useState([]);
    const [reposData, setReposData ] = useState([]);


    useEffect(() => {
        const url="http://localhost:5000/"
        // axios.get('https://api.github.com/users/raiesbo')
        //     .then(resData => setUserData(resData.data))
        //     .catch(err => console.error("here we go!!!", err));
        axios.get(`${url}users?id=${user}`)
            .then(resData => {
                if (resData.data === {}) return <Redirect to="/" push/>

                console.log("userData: ", resData.data.body[0])
                console.log("userData: ", resData.data.body[1])
                setReposData(resData.data.body[1])
                return setUserData(resData.data.body[0])
            })
            .catch(err => console.error("here we go!!!", err));
        // fetch('https://api.github.com/users/raiesbo')
        //     .then((response) => response.json())
        //     .then((data) => {setUserData([...data])})
        //     .catch((e) => {console.log('fetch failed:', e)});
        // fetch(`https://api.github.com/users/${user}`)
        //     .then(response => response.json())
        //     .then(data => setUserData(data))
        //     .catch(err => console.error("here we go!!!", err));
        
    }, []);



    return(
        <div className="user-container">
            <Profile userData={ userData } />
            <Stats userData={ userData }/>
            <Repos reposData={ reposData } />
            <Footer />
            
        </div>
        
    )
}


export default User;