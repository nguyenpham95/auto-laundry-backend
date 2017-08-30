import IPromotion from "./interfaces/IPromotion"; // eslint-disable-line
import PromotionStatus from './enums/PromotionStatus';

class PromotionCreate {
    name: string;
    status: PromotionStatus;
    detail: object;

    constructor(model: IPromotion) {
        if (!model)
            return;

        this.name = model.name;
        this.status = model.status;
        this.detail = model.detail;
    }
}

Object.seal(PromotionCreate);
export default PromotionCreate;
