const express = require('express')
const { create } = require("express-handlebars")
require('dotenv').config()
require('./config/db')
const Fruta = require('./models/Fruta')

const app = express()

const hbs = create({
    partialsDir: ["views/components"],
    extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.static(__dirname + '/public'))
app.use("/css/bootstrap.min.css", express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'))
app.use("/js/bootstrap.min.js", express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'))


app.get('/', async(req, res) => {
    //const frutas = ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"]
    try {
        const frutas = await Fruta.find().lean()
        res.render('home', {frutas: frutas})
    } catch (error) {
        console.log(error)
    }


})

app.listen(process.env.PORT, () => console.log("Server UP 😎🤙" + process.env.PORT))