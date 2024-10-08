import express, { Router } from 'express';
import path from 'path';
const app = express();
import router from './router';
import routerAdmin from './router-admin';
import morgan from "morgan";
import { MORGAN_FORMAT } from './libs/types/config';
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from './libs/types/common';


const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",
});
//ENTRANCE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
//SESSION
app.use(session({
    secret:String(process.env.SESSION_SECRET) ,
  cookie: {
    maxAge: 1000 * 3600 * 3 //3hrs
  },
  store: store,
  resave: true,
  saveUninitialized: true
}))

app.use(function(req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

//VIEWS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Routing 
// SSR: EJS
app.use("/admin", routerAdmin); //BSSR 
app.use("/", router)  //Middleware Design Pattern /SPA: REACT
















export default app;
