import * as mongoose from 'mongoose'; // eslint-disable-line
import DataAccess from '../DataAccess';
import IOrderDetail from '../../model/order/interfaces/IOrderDetail'; // eslint-disable-line

class OrderDetailSchema {
    static get schema() {
        let schemaDefinition: mongoose.SchemaDefinition = {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        };

        return DataAccess.initSchema(schemaDefinition);
    }
}

export default DataAccess.connection.model<IOrderDetail>('OrderDetail', OrderDetailSchema.schema);
