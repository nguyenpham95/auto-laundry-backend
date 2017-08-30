import PromotionCreate from '../../app/model/promotion/PromotionCreate';

export default function getPromotions(): {isRequired: boolean, data: PromotionCreate}[] {
    return [
        {isRequired: false, data: <PromotionCreate>{name: 'Test 1'}},
    ];
}
