import IBaseModel from '../../common/interfaces/IBaseModel';

interface IItem extends IBaseModel {
    description: string;
    price: number;
}

export default IItem;
