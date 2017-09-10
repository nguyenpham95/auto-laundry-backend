import IBaseBusiness from './base/IBaseBusiness';
import Product from '../../model/product/Product';
import ProductCreate from '../../model/product/ProductCreate'; // eslint-disable-line
import ProductUpdate from '../../model/product/ProductUpdate'; // eslint-disable-line

interface IProductBusiness extends IBaseBusiness<Product> {
    create: (data: ProductCreate) => Promise<Product>;
    update: (_id: string, data: ProductUpdate) => Promise<Product | null>;
}

export default IProductBusiness;
