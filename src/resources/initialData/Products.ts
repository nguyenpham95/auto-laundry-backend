import ProductCreate from '../../app/model/product/ProductCreate';

export default function getProducts(): {isRequired: boolean, data: ProductCreate}[] {
    return [
        {isRequired: false, data: <ProductCreate>{name: 'Test 1'}},
    ];
}
