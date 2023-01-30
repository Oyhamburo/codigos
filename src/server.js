import express from "express"
import passport from "passport";
import mongoose from "mongoose";
import cors from 'cors' //error de cors
import minimist from "minimist"// pasar parametros
import { initPassport } from "./passport/init.js";
import { sessionMongo }  from "./middlewares/index.middlewares.js";
import {
    npcRouter,
    objectRouter,
    viewsRouter
} from "./routes/index.routes.js";

//Parametros--
const options = {
    alias: {
        "p": "PORT",
        "m": "MODO"
    },
    default: {
        "PORT": 8400,
        "MODO": "DEV"
    }
}
const { PORT, MODO } = minimist(process.argv.slice(2), options);
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:477";

const app = express()

// Anulo el error de CORS
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session
app.use(sessionMongo);
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport)

//Rutas
app.use("/api/npc", npcRouter)
app.use("/api/object", objectRouter)
app.use("api",viewsRouter)

// html
app.use('/api', express.static('./public'))


app.listen(PORT, async () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected DB", MONGO_URI);
    } catch (error) {
        console.log(`Error en conexión de Base de datos: ${error}`);
    }
})