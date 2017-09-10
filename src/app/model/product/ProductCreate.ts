import IProduct from "./interfaces/IProduct"; // eslint-disable-line

class ProductCreate {
    name: string;

    constructor(model: IProduct) {
        if (!model)
            return;

        this.name = model.name;
    }
}

Object.seal(ProductCreate);
export default ProductCreate;
