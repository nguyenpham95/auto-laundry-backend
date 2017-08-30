import IBaseBusiness from './base/IBaseBusiness';
import Customer from '../../model/customer/Customer';
import CustomerCreate from '../../model/customer/CustomerCreate'; // eslint-disable-line
import CustomerUpdate from '../../model/customer/CustomerUpdate'; // eslint-disable-line

interface ICustomerBusiness extends IBaseBusiness<Customer> {
    create: (item: CustomerCreate) => Promise<Customer>;
    update: (_id: string, item: CustomerUpdate) => Promise<Customer | null>;
}

export default ICustomerBusiness;
