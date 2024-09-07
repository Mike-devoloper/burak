import express, { Router } from 'express';
import path from 'path';
const app = express();
import router from './router';


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router)  //Middleware Design Pattern
















export default app;
