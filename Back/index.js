const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./src/models');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

require("./src/routes")(app);

// register error handling middleware
app.use((err, req, res, next) => {    
    console.log(err);
    if (err.status === undefined) {
        res.status(500).send(err.message);
    } else {
        res.status(err.status).send((err?.message));
    }
    next();
});

app.use((req,res,next)=>{
    if(res.statusCode === 404){
        try{
            res.status(404).send("Not found");
        }
        catch(e){
            //S'il y a deja un message
        }
    }  
    next();
});

app.use('/', (req, res) => {
    const date = new Date().toLocaleString("fr-FR");
    const ip = req.header["x-forwarded-for"] || req.socket.remoteAddress;
    console.log(date+"\t"+ip+"\t"+req.method+"\t"+req.url+ "\t"+res.statusCode);
    try{
        res.status(200).end()
    }
    catch(e){
        //Si la res existe deja, provoque une erreur
    }
});

app.listen(port, async () => {

    try{
        // sync the DB
        await db.sequelize.sync({ alter: true });
    }
    catch(e){
        console.log(e.message);
        process.exit();
    }

    try{
        // Initialise tous les type
        await db.initialize();
    }
    catch(e){

    }
    console.log(`App listening on port ${port}`);
})
