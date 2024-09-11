import express, { Router } from 'express';
import path from 'path';
const app = express();
import router from './router';
import routerAdmin from './router-admin';
import morgan from "morgan";
import { MORGAN_FORMAT } from './libs/types/config';

//ENTRANCE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
//SESSION


//VIEWS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Routing 
// SSR: EJS
app.use("/admin", routerAdmin);
app.use("/", router)  //Middleware Design Pattern /SPA: REACT
















export default app;
