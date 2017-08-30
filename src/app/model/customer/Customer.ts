import ICustomer from './interfaces/ICustomer'; // eslint-disable-line

class Customer {
    _id: string;
    name: string;
    phone?: string;
    address?: string;
    note?: string;
    promotions: object[];

    createdAt?: Date;
    updatedAt?: Date;

    constructor(model: ICustomer) {
        if (!model)
            return;

        this._id = model._id && model._id.toString();
        this.name = model.name;
        this.phone = model.phone;
        this.address = model.address;
        this.note = model.note;

        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }

    static parseArray(list: ICustomer[]): Customer[] {
        return list.map(item => new Customer(item));
    }
}

Object.seal(Customer);
export default Customer;
