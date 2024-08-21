import express from 'express'
import bodyparser from 'body-parser'
import 'dotenv/config'
import irrigationController from './controllers/irrigationController'

const app = express()
const port = 8003


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
    } else {
        next();
    }
});

app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyparser.json({ limit: '50mb' }))

app.use('/irrigation', irrigationController)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})


