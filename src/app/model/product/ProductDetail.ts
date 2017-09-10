import IProductDetail from './interfaces/IProductDetail'; // eslint-disable-line

class ProductDetail {
    _id: string;
    description: string;
    price: number;

    createdAt?: Date;
    updatedAt?: Date;

    constructor(model: IProductDetail) {
        if (!model)
            return;

        this._id = model._id && model._id.toString();
        this.description = model.description;
        this.price = model.price;

        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    static parseArray(list: IProductDetail[]): ProductDetail[] {
        return list.map(item => new ProductDetail(item));
    }
}

Object.seal(ProductDetail);
export default ProductDetail;
