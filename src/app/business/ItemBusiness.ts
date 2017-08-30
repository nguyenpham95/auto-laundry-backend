import Item from '../model/item/Item';
import ItemCreate from '../model/item/ItemCreate'; // eslint-disable-line
import ItemUpdate from '../model/item/ItemUpdate'; // eslint-disable-line
import IItemBusiness from './interfaces/IItemBusiness'; // eslint-disable-line
import ItemRepository from '../repository/ItemRepository';

class ItemBusiness implements IItemBusiness {
    private itemRepository: ItemRepository;

    constructor() {
        this.itemRepository = new ItemRepository();
    }

    async getList(page: number, limit: number): Promise<Item[]> {
        let items = await this.itemRepository.find(null, null, page, limit);
        return Item.parseArray(items);
    }

    async getCount(): Promise<number> {
        return await this.itemRepository.getCount();
    }

    async get(_id: string): Promise<Item | null> {
        if (!_id)
            return null;

        let item = await this.itemRepository.get(_id);
        return item && new Item(item);
    }

    async create(item: ItemCreate): Promise<Item> {
        let result;
        if (validateName(item.name))
            result = await this.itemRepository.create(item);

        return result && new Item(result);
    }

    async update(_id: string, item: ItemUpdate): Promise<Item | null> {
        if (validateName(item.name))
            await this.itemRepository.update(_id, item);

        return await this.get(_id);
    }

    async delete(_id: string): Promise<boolean> {
        return await this.itemRepository.delete(_id);
    }
}

function validateName(name: string): boolean {
    if (!name)
        throw new Error('Name is required!');
    else if (name.trim().length < 4)
        throw new Error('Minimum name is 4 characters!');

    return true;
}

Object.seal(ItemBusiness);
export default ItemBusiness;
