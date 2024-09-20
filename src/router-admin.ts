import express  from 'express';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';

//Restaurant
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
.get("/login", restaurantController.goLogin)
.post("/login", restaurantController.goLoginProcces);
routerAdmin
.get("/signup", restaurantController.goSign)
.post("/signup", restaurantController.proccessSignUp)
.get("/logout", restaurantController.logout)
routerAdmin.get("/check-me", restaurantController.checkAuthSession)
// Product

//User

export default routerAdmin;

