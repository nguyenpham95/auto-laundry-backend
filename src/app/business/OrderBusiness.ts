import Order from '../model/order/Order';
import OrderCreate from '../model/order/OrderCreate'; // eslint-disable-line
import OrderUpdate from '../model/order/OrderUpdate'; // eslint-disable-line
import IOrderBusiness from './interfaces/IOrderBusiness'; // eslint-disable-line
import OrderRepository from '../repository/OrderRepository';

class OrderBusiness implements IOrderBusiness {
    private orderRepository: OrderRepository;

    constructor() {
        this.orderRepository = new OrderRepository();
    }

    async getList(page: number, limit: number): Promise<Order[]> {
        let orders = await this.orderRepository.find(null, null, page, limit);
        return Order.parseArray(orders);
    }

    async getCount(): Promise<number> {
        return await this.orderRepository.getCount();
    }

    async get(_id: string): Promise<Order | null> {
        if (!_id)
            return null;

        let order = await this.orderRepository.get(_id);
        return order && new Order(order);
    }

    async create(item: OrderCreate): Promise<Order> {
        let order;
        // if (validateName(item.name))
        order = await this.orderRepository.create(item);

        return order && new Order(order);
    }

    async update(_id: string, item: OrderUpdate): Promise<Order | null> {
        // if (validateName(item.name))
        await this.orderRepository.update(_id, item);

        return await this.get(_id);
    }

    async delete(_id: string): Promise<boolean> {
        return await this.orderRepository.delete(_id);
    }
}

// function validateName(name: string): boolean {
//     if (!name)
//         throw new Error('Name is required!');
//     else if (name.trim().length < 4)
//         throw new Error('Minimum name is 4 characters!');

//     return true;
// }

Object.seal(OrderBusiness);
export default OrderBusiness;
