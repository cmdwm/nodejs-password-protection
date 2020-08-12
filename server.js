const express = require('express');
const app = express()
const dir = __dirname + "/views/"

app.get("/", (req, res) => {
res.sendFile(dir + "index.html")
})

app.get("/p", (req, res) => {
if(req.query.password === process.env.PASSWORD) {
res.sendFile(dir + "yes.html")
} else {
  res.sendFile(dir + "no.html")
}
})

app.listen(process.env.PORT)