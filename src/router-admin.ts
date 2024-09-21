import express  from 'express';
import productController from './controllers/product.controller';
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
.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
// Product
routerAdmin.get("/product/all", 
restaurantController.verifyRestaurant,
productController.getAllProducts
);
routerAdmin.post("/product/create", productController.createNewProduct);
routerAdmin.post("/product/:id", productController.updateChosenProduct)

//User

export default routerAdmin;

