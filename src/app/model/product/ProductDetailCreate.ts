import IProductDetail from './interfaces/IProductDetail'; // eslint-disable-line

class ProductDetailCreate {
    description: string;
    price: number;

    constructor(model: IProductDetail) {
        if (!model)
            return;

        this.description = model.description;
        this.price = model.price;
    }
}

Object.seal(ProductDetailCreate);
export default ProductDetailCreate;
