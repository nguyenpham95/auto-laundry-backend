import Customer from '../model/customer/Customer';
import CustomerCreate from '../model/customer/CustomerCreate'; // eslint-disable-line
import CustomerUpdate from '../model/customer/CustomerUpdate'; // eslint-disable-line
import ICustomerBusiness from './interfaces/ICustomerBusiness'; // eslint-disable-line
import CustomerRepository from '../repository/CustomerRepository';
import Coordinate from '../model/common/Coordinate';
import * as nodeGeocoder from 'node-geocoder';

class CustomerBusiness implements ICustomerBusiness {
    private customerRepository: CustomerRepository;

    constructor() {
        this.customerRepository = new CustomerRepository();
    }

    async search(name: string, page: number, limit: number): Promise<Customer[]> {
        let param;
        if (name)
            param = {name: new RegExp(name, 'i')};

        let order = {
            createdAt: -1
        };

        let customers = await this.customerRepository.find(param, order, page, limit);
        return Customer.parseArray(customers);
    }

    async getCountSearch(name: string): Promise<number> {
        let param;
        if (name)
            param = {name: new RegExp(name, 'i')};

        return await this.customerRepository.getCount(param);
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
        if (validateName(item.name)) {
            if (item.address)
                item.location = await getLocation(item.address);
            customer = await this.customerRepository.create(item);
        }

        return customer && new Customer(customer);
    }

    async update(_id: string, item: CustomerUpdate): Promise<Customer | null> {
        if (validateName(item.name)) {
            if (item.address)
                item.location = await getLocation(item.address);
            await this.customerRepository.update(_id, item);
        }

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

async function getLocation(address: string): Promise<Coordinate | undefined> {
    let geocoder = nodeGeocoder({
        provider: 'google',
        // Optional depending on the providers
        // httpAdapter: 'https', // Default
        // apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
        // formatter: null         // 'gpx', 'string', ...
    });

    let res = await geocoder.geocode(address);

    if (res && res.length > 0)
        return new Coordinate(res[0].latitude, res[0].longitude);
    return undefined;
}

Object.seal(CustomerBusiness);
export default CustomerBusiness;
