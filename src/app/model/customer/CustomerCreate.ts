import ICustomer from "./interfaces/ICustomer"; // eslint-disable-line

class CustomerCreate {
    name: string;
    phone?: string;
    address?: string;
    note?: string;
    promotions: object[];

    constructor(model: ICustomer) {
        if (!model)
            return;

        this.name = model.name;
        this.phone = model.phone;
        this.address = model.address;
        this.note = model.note;
        this.promotions = [];
    }
}

Object.seal(CustomerCreate);
export default CustomerCreate;
