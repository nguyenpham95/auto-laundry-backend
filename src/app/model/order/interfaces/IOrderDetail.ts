import IBaseModel from '../../common/interfaces/IBaseModel';

interface IOrderDetail extends IBaseModel {
    itemId: string;
    description: string;
    price: number;
}

export default IOrderDetail;
