import express, { Router } from 'express';
import path from 'path';
const app = express();
import router from './router';
import routerAdmin from './routerAdmin';


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Routing 
// SSR: EJS
app.use("/admin", routerAdmin);
app.use("/", router)  //Middleware Design Pattern /SPA: REACT
















export default app;
