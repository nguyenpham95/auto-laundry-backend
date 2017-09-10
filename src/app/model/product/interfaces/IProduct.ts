import IBaseModel from '../../common/interfaces/IBaseModel';
import IProductDetail from './IProductDetail';

interface IProduct extends IBaseModel {
    name: string;
    details: IProductDetail[];
}

export default IProduct;
