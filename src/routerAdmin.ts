import express  from 'express';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';

routerAdmin.get("/", restaurantController.goHome);


routerAdmin.get("/login", restaurantController.goLogin);


routerAdmin.get("/signup", restaurantController.goSign);

export default routerAdmin;

