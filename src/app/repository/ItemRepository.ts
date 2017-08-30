import IItem from '../model/item/interfaces/IItem'; // eslint-disable-line
import ItemSchema from '../dataAccess/schemas/ItemSchema';
import BaseRepository from './base/BaseRepository';
import ItemCreate from '../model/item/ItemCreate'; // eslint-disable-line
import ItemUpdate from '../model/item/ItemUpdate'; // eslint-disable-line

class ItemRepository extends BaseRepository<IItem> {
    constructor() {
        super(ItemSchema);
    }

    async create(item: ItemCreate): Promise<IItem> {
        return await super.create(item);
    }

    async update(_id: string, item: ItemUpdate): Promise<boolean> {
        return await super.update(_id, item);
    }
}

Object.seal(ItemRepository);
export default ItemRepository;
