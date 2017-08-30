import IBaseBusiness from './base/IBaseBusiness';
import Promotion from '../../model/promotion/Promotion';
import PromotionCreate from '../../model/promotion/PromotionCreate'; // eslint-disable-line
import PromotionUpdate from '../../model/promotion/PromotionUpdate'; // eslint-disable-line

interface IPromotionBusiness extends IBaseBusiness<Promotion> {
    create: (item: PromotionCreate) => Promise<Promotion>;
    update: (_id: string, item: PromotionUpdate) => Promise<Promotion | null>;
}

export default IPromotionBusiness;
