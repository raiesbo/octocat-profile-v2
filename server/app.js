const fetch = require("node-fetch")

// let username = "raiesbo";


const userData = (user, callback) => {
    const url = `https://api.github.com/users/${user}`;
    const url2 = `https://api.github.com/users/${user}/repos`;

    let info = []

    fetch(url, { method: "GET" })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            // return callback(undefined, data)
            info.push(data)
        })
        .catch((e) => {
            console.log(e)
            return callback(e, undefined)
        })

    
    fetch(url2, { method: "GET" })
        .then(response => response.json())
        .then((data2) => {
            console.log(data2)
            info.push(data2)
            info.push("3") // shit for now, to delete
            return callback(undefined, info)
        })
        .catch((e) => {
            console.log(e)
            return callback(e, undefined)
        })
    
    
}


const reposData = (user, callback) => {
    const url = `https://api.github.com/users/${user}/repos`;

    fetch(url, { method: "GET" })
        .then(response => response.json)
        .then((data => {
            console.log(data)
            return callback(undefined, data)
        }))
        .catch((e) => {
            console.log(e)
            return callback(e, undefined)
        })
}

// userData(username)


module.exports = userData;