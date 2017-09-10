import IProduct from "./interfaces/IProduct"; // eslint-disable-line

class ProductUpdate {
    name: string;

    constructor(model: IProduct) {
        if (!model)
            return;

        this.name = model.name;
    }
}

Object.seal(ProductUpdate);
export default ProductUpdate;
