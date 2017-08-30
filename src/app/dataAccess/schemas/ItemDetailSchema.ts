import * as mongoose from 'mongoose'; // eslint-disable-line
import DataAccess from '../DataAccess';
import IItemDetail from '../../model/item/interfaces/IItemDetail'; // eslint-disable-line

class ItemDetailSchema {
    static get schema() {
        let schemaDefinition: mongoose.SchemaDefinition = {
            description: {
                type: String,
                required: true,
                trim: true,
                min: 2,
                max: 255
            },
            price: {
                type: Number,
                required: true
            }
        };

        return DataAccess.initSchema(schemaDefinition);
    }
}

export default DataAccess.connection.model<IItemDetail>('ItemDetail', ItemDetailSchema.schema);
