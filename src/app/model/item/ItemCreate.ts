import IItem from "./interfaces/IItem"; // eslint-disable-line

class ItemCreate {
    name: string;

    constructor(model: IItem) {
        if (!model)
            return;

        this.name = model.name;
    }
}

Object.seal(ItemCreate);
export default ItemCreate;
