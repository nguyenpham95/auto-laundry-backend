import BaseController from './base/BaseController';
import CustomerBusiness from '../app/business/CustomerBusiness';
import ICustomerBusiness from '../app/business/interfaces/ICustomerBusiness';
import CustomerCreate from '../app/model/customer/CustomerCreate';
import CustomerUpdate from '../app/model/customer/CustomerUpdate';
import Authenticator from '../system/Authenticator';

class CustomerController extends BaseController {
    private customerBusiness: ICustomerBusiness = new CustomerBusiness();

    constructor() {
        super();

        this.get('/list/:page', this.getCustomers.bind(this));
        this.get('/:_id', this.getCustomerById.bind(this));
        this.post('/', Authenticator.isAuthenticated, this.createCustomer.bind(this));
        this.put('/:_id', Authenticator.isAuthenticated, this.updateCustomer.bind(this));
        this.delete('/:_id', Authenticator.isHandlerRoles('Administrator'), this.deleteCustomer.bind(this));
    }

    async getCustomers(req): Promise<any> {
        return await this.customerBusiness.getList(req.params.page, 10);
    }

    async getCustomerById(req): Promise<any> {
        return await this.customerBusiness.get(req.params._id);
    }

    async createCustomer(req): Promise<any> {
        return await this.customerBusiness.create(new CustomerCreate(req.body));
    }

    async updateCustomer(req): Promise<any> {
        return await this.customerBusiness.update(req.params._id, new CustomerUpdate(req.body));
    }

    async deleteCustomer(req): Promise<any> {
        return await this.customerBusiness.delete(req.params._id);
    }
}

Object.seal(CustomerController);
export default CustomerController;
