import express  from 'express';
import productController from './controllers/product.controller';
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller';
import  makeUpLoader  from './libs/types/utils/uploader';
import router from './router';

//Restaurant
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
.get("/login", restaurantController.goLogin)
.post("/login", restaurantController.goLoginProcces);
routerAdmin
.get("/signup", restaurantController.goSign)
.post("/signup", 
makeUpLoader("members").single("memberImage"), 
restaurantController.proccessSignUp)
.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
// Product
routerAdmin.get("/product/all", 
restaurantController.verifyRestaurant,
productController.getAllProducts
);
routerAdmin.post("/product/create", 
restaurantController.verifyRestaurant,
makeUpLoader("products").array("productImages", 5),
 productController.createNewProduct
 );
routerAdmin.post("/product/:id", 
restaurantController.verifyRestaurant,
 productController.updateChosenProduct
 );

//User
routerAdmin.get("/user/all", 
restaurantController.verifyRestaurant, 
restaurantController.getUsers);

routerAdmin.post("/user/edit", 
restaurantController.verifyRestaurant, 
restaurantController.updateChosenUser);


export default routerAdmin;

