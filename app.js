const mainRoutes = require('./src/routes/mainRoutes');
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));


// ejs setting
app.set('view engine', 'ejs');

// routes
app.use('/', mainRoutes);

app.listen(3000, () =>{console.log("Servidor corriendo en puerto 3000")});


/*app.use((req, res, next) => { 
    res.status(404).render('pages/not-found'); 
});*/