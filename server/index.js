const express = require("express");
var cors = require('cors')
const app = express();

const userData = require("./app")

const port = process.env.PORT || 5000;


const corsOptions = {
    origin: "https://octocatprofile.raimonespasa.com",
    optionsSuccessStatus: 200
}

// app.use(cors())

app.get("/", cors(), (req, res) => {
    res.send("Octocat Profiler REST API")
})

app.get('/user?:id', cors(corsOptions), async (req, res) => {
    let id = req.query.id

    if (!id) {
        res.status(404).send({
            error: "You must provide an address"
        })
    } else {
        try {
            userData(id, ( error, body ) => {
                if(error) {
                    console.log("there was an error", error)
                    res.send({ error })
                } else {
                    res.json({
                        body
                    })
                }    
            })
        } catch (e) {
            res.status(400).send(e)
        }
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})

