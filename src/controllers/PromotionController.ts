import BaseController from './base/BaseController';
import PromotionBusiness from '../app/business/PromotionBusiness';
import IPromotionBusiness from '../app/business/interfaces/IPromotionBusiness';
import PromotionCreate from '../app/model/promotion/PromotionCreate';
import PromotionUpdate from '../app/model/promotion/PromotionUpdate';
import Authenticator from '../system/Authenticator';

class PromotionController extends BaseController {
    private promotionBusiness: IPromotionBusiness = new PromotionBusiness();

    constructor() {
        super();

        this.get('/list/:page', this.getPromotions.bind(this));
        this.get('/:_id', this.getPromotionById.bind(this));
        this.post('/', Authenticator.isAuthenticated, this.createPromotion.bind(this));
        this.put('/:_id', Authenticator.isAuthenticated, this.updatePromotion.bind(this));
        this.delete('/:_id', Authenticator.isHandlerRoles('Administrator'), this.deletePromotion.bind(this));
    }

    async getPromotions(req): Promise<any> {
        return await this.promotionBusiness.getList(req.params.page, 10);
    }

    async getPromotionById(req): Promise<any> {
        return await this.promotionBusiness.get(req.params._id);
    }

    async createPromotion(req): Promise<any> {
        return await this.promotionBusiness.create(new PromotionCreate(req.body));
    }

    async updatePromotion(req): Promise<any> {
        return await this.promotionBusiness.update(req.params._id, new PromotionUpdate(req.body));
    }

    async deletePromotion(req): Promise<any> {
        return await this.promotionBusiness.delete(req.params._id);
    }
}

Object.seal(PromotionController);
export default PromotionController;
