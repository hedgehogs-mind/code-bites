import express from "express"
import {EnvVars} from "./env";

const app = express()

app.use((req, res, next) => {
    const apiKeyHeader = req.header("x-api-key")

    if ( apiKeyHeader !== EnvVars.API_KEY ) {
        res.status(401).send("No or wrong API key.")
        return
    }

    next()
})

app.get('/', (req, res) => {
    res.send('Zod is awesome! 💎')
})

app.listen(EnvVars.PORT, () => {
    console.log(`Listening on port ${EnvVars.PORT}`)
})