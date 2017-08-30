import ICustomer from '../model/customer/interfaces/ICustomer'; // eslint-disable-line
import CustomerSchema from '../dataAccess/schemas/CustomerSchema';
import BaseRepository from './base/BaseRepository';
import CustomerCreate from '../model/customer/CustomerCreate'; // eslint-disable-line
import CustomerUpdate from '../model/customer/CustomerUpdate'; // eslint-disable-line

class CustomerRepository extends BaseRepository<ICustomer> {
    constructor() {
        super(CustomerSchema);
    }

    async create(item: CustomerCreate): Promise<ICustomer> {
        return await super.create(item);
    }

    async update(_id: string, item: CustomerUpdate): Promise<boolean> {
        return await super.update(_id, item);
    }
}

Object.seal(CustomerRepository);
export default CustomerRepository;
