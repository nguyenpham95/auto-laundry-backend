import IProduct from './interfaces/IProduct'; // eslint-disable-line
import ProductDetail from './ProductDetail';

class Product {
    _id: string;
    name: string;
    details: ProductDetail[];

    createdAt?: Date;
    updatedAt?: Date;

    constructor(model: IProduct) {
        if (!model)
            return;

        this._id = model._id && model._id.toString();
        this.name = model.name;
        this.details = ProductDetail.parseArray(model.details);

        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    static parseArray(list: IProduct[]): Product[] {
        return list.map(item => new Product(item));
    }
}

Object.seal(Product);
export default Product;
