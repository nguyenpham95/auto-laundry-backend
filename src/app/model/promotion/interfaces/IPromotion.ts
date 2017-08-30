import IBaseModel from '../../common/interfaces/IBaseModel';
import PromotionStatus from '../enums/PromotionStatus';

interface IPromotion extends IBaseModel {
    name: string;
    status: PromotionStatus;
    detail: object;
}

export default IPromotion;
