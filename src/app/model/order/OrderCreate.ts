import IOrder from "./interfaces/IOrder"; // eslint-disable-line
import OrderStatus from './enums/OrderStatus';

class OrderCreate {
    receiveDate: Date;
    customerId: string;
    description?: string;
    status: OrderStatus;

    constructor(model: IOrder) {
        if (!model)
            return;

        this.receiveDate = model.receiveDate;
        this.customerId = model.customerId;
        this.description = model.description;
        this.status = model.status;
    }
}

Object.seal(OrderCreate);
export default OrderCreate;
