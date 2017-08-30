import IOrderDetail from './interfaces/IOrderDetail'; // eslint-disable-line

class OrderDetailCreate {
    itemId: string;
    description: string;
    price: number;

    constructor(model: IOrderDetail) {
        if (!model)
            return;

        this.itemId = model.itemId;
        this.description = model.description;
        this.price = model.price;
    }
}

Object.seal(OrderDetailCreate);
export default OrderDetailCreate;
