require('dotenv').config();
const express = require("express");
const app = express();
const PORT =process.env.PORT;
const cors = require('cors');

// Importa y ejecuta connectDB
const connectDB = require('./config/mongoose.config');
connectDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importa el router de ToDos
const router = require("./routes/tasks.routes");

//use /api de prefijo para todas las rutas
app.use("/api", router);

app.use((req, res) => {
    res.status(404).send(`
        Ruta no existe: ${req.originalUrl}
    `);
});


app.listen(PORT, ()=>{
    console.log('Server is listening on http://localhost:'+PORT);
})