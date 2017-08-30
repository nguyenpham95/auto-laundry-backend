import IBaseModel from '../../common/interfaces/IBaseModel';

interface ICustomer extends IBaseModel {
    name: string;
    phone?: string;
    address?: string;
    note?: string;
    promotions: object[];
}

export default ICustomer;
