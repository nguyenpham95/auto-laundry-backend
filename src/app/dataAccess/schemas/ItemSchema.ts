import * as mongoose from 'mongoose'; // eslint-disable-line
import DataAccess from '../DataAccess';
import ItemDetailSchema from './ItemDetailSchema';
import IItem from '../../model/item/interfaces/IItem'; // eslint-disable-line

class ItemSchema {
    static get schema() {
        let schemaDefinition: mongoose.SchemaDefinition = {
            name: {
                type: String,
                required: true,
                trim: true,
                min: 2,
                max: 50
            },
            details: {
                type: [ItemDetailSchema],
                default: []
            }
        };

        return DataAccess.initSchema(schemaDefinition);
    }
}

export default DataAccess.connection.model<IItem>('Item', ItemSchema.schema);
