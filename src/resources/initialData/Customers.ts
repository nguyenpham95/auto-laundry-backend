import CustomerCreate from '../../app/model/customer/CustomerCreate';

export default function getCustomers(): {isRequired: boolean, data: CustomerCreate}[] {
    return [
        {isRequired: false, data: <CustomerCreate>{name: 'Felix Le', phone: '0912.454.236', address: '107/17/7A Ni Sư Huỳnh Liên, P.10, Q.Tân Bình, HCM', note: 'Handsome'}},
        {isRequired: false, data: <CustomerCreate>{name: 'Johnny Nguyen', phone: '0937.231.678', address: '456 Xyz', note: 'Smart'}},
    ];
}
