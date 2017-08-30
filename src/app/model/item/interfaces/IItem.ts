import IBaseModel from '../../common/interfaces/IBaseModel';
import IItemDetail from './IItemDetail';

interface IItem extends IBaseModel {
    name: string;
    details: IItemDetail[];
}

export default IItem;
