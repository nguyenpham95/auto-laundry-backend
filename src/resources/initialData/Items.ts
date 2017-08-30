import ItemCreate from '../../app/model/item/ItemCreate';

export default function getItems(): {isRequired: boolean, data: ItemCreate}[] {
    return [
        {isRequired: false, data: <ItemCreate>{name: 'Test 1'}},
    ];
}
