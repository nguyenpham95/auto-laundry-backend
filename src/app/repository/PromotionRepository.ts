import IPromotion from '../model/promotion/interfaces/IPromotion'; // eslint-disable-line
import PromotionSchema from '../dataAccess/schemas/PromotionSchema';
import BaseRepository from './base/BaseRepository';
import PromotionCreate from '../model/promotion/PromotionCreate'; // eslint-disable-line
import PromotionUpdate from '../model/promotion/PromotionUpdate'; // eslint-disable-line

class PromotionRepository extends BaseRepository<IPromotion> {
    constructor() {
        super(PromotionSchema);
    }

    async create(item: PromotionCreate): Promise<IPromotion> {
        return await super.create(item);
    }

    async update(_id: string, item: PromotionUpdate): Promise<boolean> {
        return await super.update(_id, item);
    }
}

Object.seal(PromotionRepository);
export default PromotionRepository;
