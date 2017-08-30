import IItem from "./interfaces/IItem"; // eslint-disable-line

class ItemUpdate {
    name: string;

    constructor(model: IItem) {
        if (!model)
            return;

        this.name = model.name;
    }
}

Object.seal(ItemUpdate);
export default ItemUpdate;
