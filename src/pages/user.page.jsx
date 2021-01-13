import React, { useState, useEffect } from "react";
import Profile from "../components/profile.component";
import Footer from "../components/footer.component";
import Stats from "../components/stats.component";
import Repos from "../components/repos.component";
import "./user.styles.css";

const axios = require('axios');

const User = ({ username }) => {

    const [user, setUser ] = useState(username);
    const [userData, setUserData ] = useState("");


    useEffect( async () => {
        const data = await axios("/user?id=" + user)
        setUserData(data)
    }, [user]);



    return(
        <div className="user-container">

            <Profile username={ user } />
            <Stats userData={ userData }/>
            <Repos userData={ userData } />
            <Footer />
        </div>
        
    )
}


export default User;