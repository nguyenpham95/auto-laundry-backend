import ICustomer from "./interfaces/ICustomer"; // eslint-disable-line

class CustomerUpdate {
    name: string;
    phone?: string;
    address?: string;
    note?: string;

    constructor(model: ICustomer) {
        if (!model)
            return;

        this.name = model.name;
        this.phone = model.phone;
        this.address = model.address;
        this.note = model.note;
    }
}

Object.seal(CustomerUpdate);
export default CustomerUpdate;
