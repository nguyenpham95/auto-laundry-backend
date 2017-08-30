import IBaseBusiness from './base/IBaseBusiness';
import Order from '../../model/order/Order';
import OrderCreate from '../../model/order/OrderCreate'; // eslint-disable-line
import OrderUpdate from '../../model/order/OrderUpdate'; // eslint-disable-line

interface IOrderBusiness extends IBaseBusiness<Order> {
    create: (item: OrderCreate) => Promise<Order>;
    update: (_id: string, item: OrderUpdate) => Promise<Order | null>;
}

export default IOrderBusiness;
