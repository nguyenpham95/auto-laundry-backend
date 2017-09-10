import IBaseModel from '../../common/interfaces/IBaseModel';

interface IProductDetail extends IBaseModel {
    description: string;
    price: number;
}

export default IProductDetail;
