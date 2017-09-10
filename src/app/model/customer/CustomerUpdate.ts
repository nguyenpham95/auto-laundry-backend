import ICustomer from "./interfaces/ICustomer"; // eslint-disable-line
import Coordinate from '../common/Coordinate';

class CustomerUpdate {
    name: string;
    phone?: string;
    address?: string;
    note?: string;
    location?: Coordinate;

    constructor(model: ICustomer) {
        if (!model)
            return;

        this.name = model.name;
        this.phone = model.phone;
        this.address = model.address;
        this.note = model.note;
        this.location = model.location;
    }
}

Object.seal(CustomerUpdate);
export default CustomerUpdate;
