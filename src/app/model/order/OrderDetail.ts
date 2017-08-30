import IOrderDetail from './interfaces/IOrderDetail'; // eslint-disable-line

class OrderDetail {
    _id: string;
    itemId: string;
    description: string;
    price: number;

    createdAt?: Date;
    updatedAt?: Date;

    constructor(model: IOrderDetail) {
        if (!model)
            return;

        this._id = model._id && model._id.toString();
        this.itemId = model.itemId;
        this.description = model.description;
        this.price = model.price;

        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    static parseArray(list: IOrderDetail[]): OrderDetail[] {
        return list.map(item => new OrderDetail(item));
    }
}

Object.seal(OrderDetail);
export default OrderDetail;
