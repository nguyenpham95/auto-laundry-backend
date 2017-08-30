import IItem from './interfaces/IItem'; // eslint-disable-line
import ItemDetail from './ItemDetail';

class Item {
    _id: string;
    name: string;
    details: ItemDetail[];

    createdAt?: Date;
    updatedAt?: Date;

    constructor(model: IItem) {
        if (!model)
            return;

        this._id = model._id && model._id.toString();
        this.name = model.name;
        this.details = ItemDetail.parseArray(model.details);

        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    static parseArray(list: IItem[]): Item[] {
        return list.map(item => new Item(item));
    }
}

Object.seal(Item);
export default Item;
