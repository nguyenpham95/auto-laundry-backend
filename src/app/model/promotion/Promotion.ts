import IPromotion from './interfaces/IPromotion'; // eslint-disable-line
import PromotionStatus from './enums/PromotionStatus';

class Promotion {
    _id: string;
    name: string;
    status: PromotionStatus;
    detail: object;

    createdAt?: Date;
    updatedAt?: Date;

    constructor(model: IPromotion) {
        if (!model)
            return;

        this._id = model._id && model._id.toString();
        this.name = model.name;
        this.status = model.status;
        this.detail = model.detail;

        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    static parseArray(list: IPromotion[]): Promotion[] {
        return list.map(item => new Promotion(item));
    }
}

Object.seal(Promotion);
export default Promotion;
