const express = require("express");
const app = express();

const userData = require("./app")

const port = process.env.PORT || 5000;

app.get('/user?:id', async (req, res) => {
    let id = req.query.id
    // console.log(req.query)

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