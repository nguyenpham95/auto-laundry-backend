import IBaseModel from '../../common/interfaces/IBaseModel';
import Coordinate from '../../common/Coordinate';

interface ICustomer extends IBaseModel {
    name: string;
    phone?: string;
    address?: string;
    note?: string;
    location?: Coordinate;
    promotions: object[];
}

export default ICustomer;
