import CustomerCreate from '../../app/model/customer/CustomerCreate';

export default function getCustomers(): {isRequired: boolean, data: CustomerCreate}[] {
    return [
        {isRequired: false, data: <CustomerCreate>{name: 'Test 1'}},
    ];
}
