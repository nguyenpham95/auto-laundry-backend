import * as express from 'express';
import HomeController from '../controllers/HomeController';
import UserController from '../controllers/UserController';
import RoleController from '../controllers/RoleController';
import CustomerController from '../controllers/CustomerController';
import ProductController from '../controllers/ProductController';
import OrderController from '../controllers/OrderController';
import PromotionController from '../controllers/PromotionController';

class RouteLoader {
    private app: express.Express = express();

    constructor() {
        this.app.use('/api/', new HomeController().getRouter());
        this.app.use('/api/user', new UserController().getRouter());
        this.app.use('/api/role', new RoleController().getRouter());
        this.app.use('/api/customer', new CustomerController().getRouter());
        this.app.use('/api/product', new ProductController().getRouter());
        this.app.use('/api/order', new OrderController().getRouter());
        this.app.use('/api/promotion', new PromotionController().getRouter());
    }

    getRouters() {
        return this.app;
    }
}

export default RouteLoader;
