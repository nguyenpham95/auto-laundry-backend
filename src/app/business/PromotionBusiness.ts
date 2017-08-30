import Promotion from '../model/promotion/Promotion';
import PromotionCreate from '../model/promotion/PromotionCreate'; // eslint-disable-line
import PromotionUpdate from '../model/promotion/PromotionUpdate'; // eslint-disable-line
import IPromotionBusiness from './interfaces/IPromotionBusiness'; // eslint-disable-line
import PromotionRepository from '../repository/PromotionRepository';

class PromotionBusiness implements IPromotionBusiness {
    private promotionRepository: PromotionRepository;

    constructor() {
        this.promotionRepository = new PromotionRepository();
    }

    async getList(page: number, limit: number): Promise<Promotion[]> {
        let promotions = await this.promotionRepository.find(null, null, page, limit);
        return Promotion.parseArray(promotions);
    }

    async getCount(): Promise<number> {
        return await this.promotionRepository.getCount();
    }

    async get(_id: string): Promise<Promotion | null> {
        if (!_id)
            return null;

        let promotion = await this.promotionRepository.get(_id);
        return promotion && new Promotion(promotion);
    }

    async create(item: PromotionCreate): Promise<Promotion> {
        let promotion;
        if (validateName(item.name))
            promotion = await this.promotionRepository.create(item);

        return promotion && new Promotion(promotion);
    }

    async update(_id: string, item: PromotionUpdate): Promise<Promotion | null> {
        if (validateName(item.name))
            await this.promotionRepository.update(_id, item);

        return await this.get(_id);
    }

    async delete(_id: string): Promise<boolean> {
        return await this.promotionRepository.delete(_id);
    }
}

function validateName(name: string): boolean {
    if (!name)
        throw new Error('Name is required!');
    else if (name.trim().length < 4)
        throw new Error('Minimum name is 4 characters!');

    return true;
}

Object.seal(PromotionBusiness);
export default PromotionBusiness;
