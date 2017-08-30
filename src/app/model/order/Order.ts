import IOrder from './interfaces/IOrder'; // eslint-disable-line
import OrderDetail from './OrderDetail';
import OrderStatus from './enums/OrderStatus';

class Order {
    _id: string;
    receiveDate: Date;
    customerId: string;
    description?: string;
    status: OrderStatus;
    details: OrderDetail[];

    createdAt?: Date;
    updatedAt?: Date;

    constructor(model: IOrder) {
        if (!model)
            return;

        this._id = model._id && model._id.toString();
        this.receiveDate = model.receiveDate;
        this.customerId = model.customerId;
        this.description = model.description;
        this.status = model.status;
        this.details = OrderDetail.parseArray(model.details);

        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    static parseArray(list: IOrder[]): Order[] {
        return list.map(item => new Order(item));
    }
}

Object.seal(Order);
export default Order;
