const fetch = require("node-fetch")

let username = "raiesbo";


const userData = (user, callback) => {
    const url = `https://api.github.com/users/${user}`;

    fetch(url, { method: "GET" })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            return callback(undefined, data)
        })
        .catch((e) => {
            console.log(e)
            return callback(e, undefined)
        })
}

userData(username)


module.exports = userData;