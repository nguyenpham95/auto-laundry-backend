import Customer from '../model/customer/Customer';
import CustomerCreate from '../model/customer/CustomerCreate'; // eslint-disable-line
import CustomerUpdate from '../model/customer/CustomerUpdate'; // eslint-disable-line
import ICustomerBusiness from './interfaces/ICustomerBusiness'; // eslint-disable-line
import CustomerRepository from '../repository/CustomerRepository';

class CustomerBusiness implements ICustomerBusiness {
    private customerRepository: CustomerRepository;

    constructor() {
        this.customerRepository = new CustomerRepository();
    }

    async getList(page: number, limit: number): Promise<Customer[]> {
        let customers = await this.customerRepository.find(null, null, page, limit);
        return Customer.parseArray(customers);
    }

    async getCount(): Promise<number> {
        return await this.customerRepository.getCount();
    }

    async get(_id: string): Promise<Customer | null> {
        if (!_id)
            return null;

        let customer = await this.customerRepository.get(_id);
        return customer && new Customer(customer);
    }

    async create(item: CustomerCreate): Promise<Customer> {
        let customer;
        if (validateName(item.name))
            customer = await this.customerRepository.create(item);

        return customer && new Customer(customer);
    }

    async update(_id: string, item: CustomerUpdate): Promise<Customer | null> {
        if (validateName(item.name))
            await this.customerRepository.update(_id, item);

        return await this.get(_id);
    }

    async delete(_id: string): Promise<boolean> {
        return await this.customerRepository.delete(_id);
    }
}

function validateName(name: string): boolean {
    if (!name)
        throw new Error('Name is required!');
    else if (name.trim().length < 4)
        throw new Error('Minimum name is 4 characters!');

    return true;
}

Object.seal(CustomerBusiness);
export default CustomerBusiness;
