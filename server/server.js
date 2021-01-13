const express = require("express");
const app = express();

const userData = require("./app")

app.get('/user', async (req, res) => {
    if (!req.query.id) {
        res.status(404).send({
            error: "You must provide an address"
        })
    } else {
        try {
            userData(req.query.id, ( error, body ) => {
                if(error) {
                    res.send({ error })
                } else {
                    res.send({ body })
                }
            })
        } catch (e) {
            res.status(400).send(e)
        }
    }
})

app.listen(3000)