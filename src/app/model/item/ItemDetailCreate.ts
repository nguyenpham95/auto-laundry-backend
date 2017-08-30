import IItemDetail from './interfaces/IItemDetail'; // eslint-disable-line

class ItemDetailCreate {
    description: string;
    price: number;

    constructor(model: IItemDetail) {
        if (!model)
            return;

        this.description = model.description;
        this.price = model.price;
    }
}

Object.seal(ItemDetailCreate);
export default ItemDetailCreate;
