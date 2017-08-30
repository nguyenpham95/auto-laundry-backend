import IItemDetail from './interfaces/IItemDetail'; // eslint-disable-line

class ItemDetail {
    _id: string;
    description: string;
    price: number;

    createdAt?: Date;
    updatedAt?: Date;

    constructor(model: IItemDetail) {
        if (!model)
            return;

        this._id = model._id && model._id.toString();
        this.description = model.description;
        this.price = model.price;

        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    static parseArray(list: IItemDetail[]): ItemDetail[] {
        return list.map(item => new ItemDetail(item));
    }
}

Object.seal(ItemDetail);
export default ItemDetail;
