import BaseController from './base/BaseController';
import ItemBusiness from '../app/business/ItemBusiness';
import IItemBusiness from '../app/business/interfaces/IItemBusiness';
import ItemCreate from '../app/model/item/ItemCreate';
import ItemUpdate from '../app/model/item/ItemUpdate';
import Authenticator from '../system/Authenticator';

class ItemController extends BaseController {
    private itemBusiness: IItemBusiness = new ItemBusiness();

    constructor() {
        super();

        this.get('/list/:page', this.getItems.bind(this));
        this.get('/:_id', this.getItemById.bind(this));
        this.post('/', Authenticator.isAuthenticated, this.createItem.bind(this));
        this.put('/:_id', Authenticator.isAuthenticated, this.updateItem.bind(this));
        this.delete('/:_id', Authenticator.isHandlerRoles('Administrator'), this.deleteItem.bind(this));
    }

    async getItems(req): Promise<any> {
        return await this.itemBusiness.getList(req.params.page, 10);
    }

    async getItemById(req): Promise<any> {
        return await this.itemBusiness.get(req.params._id);
    }

    async createItem(req): Promise<any> {
        return await this.itemBusiness.create(new ItemCreate(req.body));
    }

    async updateItem(req): Promise<any> {
        return await this.itemBusiness.update(req.params._id, new ItemUpdate(req.body));
    }

    async deleteItem(req): Promise<any> {
        return await this.itemBusiness.delete(req.params._id);
    }
}

Object.seal(ItemController);
export default ItemController;
