import IBaseBusiness from './base/IBaseBusiness';
import Item from '../../model/item/Item';
import ItemCreate from '../../model/item/ItemCreate'; // eslint-disable-line
import ItemUpdate from '../../model/item/ItemUpdate'; // eslint-disable-line

interface IItemBusiness extends IBaseBusiness<Item> {
    create: (item: ItemCreate) => Promise<Item>;
    update: (_id: string, item: ItemUpdate) => Promise<Item | null>;
}

export default IItemBusiness;
