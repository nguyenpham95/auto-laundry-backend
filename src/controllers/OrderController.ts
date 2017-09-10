import BaseController from './base/BaseController';
import OrderBusiness from '../app/business/OrderBusiness';
import IOrderBusiness from '../app/business/interfaces/IOrderBusiness';
import OrderCreate from '../app/model/order/OrderCreate';
import OrderUpdate from '../app/model/order/OrderUpdate';
import Authenticator from '../system/Authenticator';

class OrderController extends BaseController {
    private orderBusiness: IOrderBusiness = new OrderBusiness();

    constructor() {
        super();

        this.get('/list/:page/:limit', this.getOrders.bind(this));
        this.get('/list/count', this.getCountOrders.bind(this));
        this.get('/:_id', this.getOrderById.bind(this));
        this.post('/', Authenticator.isAuthenticated, this.createOrder.bind(this));
        this.put('/:_id', Authenticator.isAuthenticated, this.updateOrder.bind(this));
        this.delete('/:_id', Authenticator.isHandlerRoles('Administrator'), this.deleteOrder.bind(this));
    }

    async getOrders(req): Promise<any> {
        return await this.orderBusiness.getList(req.params.page, req.params.limit);
    }

    async getCountOrders(req): Promise<any> {
        return await this.orderBusiness.getCount();
    }

    async getOrderById(req): Promise<any> {
        return await this.orderBusiness.get(req.params._id);
    }

    async createOrder(req): Promise<any> {
        return await this.orderBusiness.create(new OrderCreate(req.body));
    }

    async updateOrder(req): Promise<any> {
        return await this.orderBusiness.update(req.params._id, new OrderUpdate(req.body));
    }

    async deleteOrder(req): Promise<any> {
        return await this.orderBusiness.delete(req.params._id);
    }
}

Object.seal(OrderController);
export default OrderController;
