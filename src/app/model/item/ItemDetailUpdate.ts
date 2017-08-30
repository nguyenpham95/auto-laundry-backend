import IItemDetail from './interfaces/IItemDetail'; // eslint-disable-line

class ItemDetailUpdate {
    description: string;
    price: number;

    constructor(model: IItemDetail) {
        if (!model)
            return;

        this.description = model.description;
        this.price = model.price;
    }
}

Object.seal(ItemDetailUpdate);
export default ItemDetailUpdate;
