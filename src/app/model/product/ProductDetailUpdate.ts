import IProductDetail from './interfaces/IProductDetail'; // eslint-disable-line

class ProductDetailUpdate {
    description: string;
    price: number;

    constructor(model: IProductDetail) {
        if (!model)
            return;

        this.description = model.description;
        this.price = model.price;
    }
}

Object.seal(ProductDetailUpdate);
export default ProductDetailUpdate;
