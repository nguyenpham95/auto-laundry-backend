import IBaseModel from '../../common/interfaces/IBaseModel';
import IOrderDetail from './IOrderDetail';
import OrderStatus from '../enums/OrderStatus';

interface IOrder extends IBaseModel {
    receiveDate: Date;
    customerId: string;
    description?: string;
    status: OrderStatus;
    details: IOrderDetail[];
}

export default IOrder;
