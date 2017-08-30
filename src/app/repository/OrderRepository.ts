import IOrder from '../model/order/interfaces/IOrder'; // eslint-disable-line
import OrderSchema from '../dataAccess/schemas/OrderSchema';
import BaseRepository from './base/BaseRepository';
import OrderCreate from '../model/order/OrderCreate'; // eslint-disable-line
import OrderUpdate from '../model/order/OrderUpdate'; // eslint-disable-line

class OrderRepository extends BaseRepository<IOrder> {
    constructor() {
        super(OrderSchema);
    }

    async create(item: OrderCreate): Promise<IOrder> {
        return await super.create(item);
    }

    async update(_id: string, item: OrderUpdate): Promise<boolean> {
        return await super.update(_id, item);
    }
}

Object.seal(OrderRepository);
export default OrderRepository;
