import * as mongoose from 'mongoose'; // eslint-disable-line
import DataAccess from '../DataAccess';
import IOrder from '../../model/order/interfaces/IOrder'; // eslint-disable-line
import IOrderDetailSchema from './OrderDetailSchema';

class OrderSchema {
    static get schema() {
        let schemaDefinition: mongoose.SchemaDefinition = {
            receiveDate: {
                type: Date,
                default: new Date()
            },
            customerId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            description: {
                type: String,
                trim: true
            },
            status: {
                type: Number,
                default: 0
            },
            details: {
                type: [IOrderDetailSchema],
                default: []
            }
        };

        return DataAccess.initSchema(schemaDefinition);
    }
}

export default DataAccess.connection.model<IOrder>('Order', OrderSchema.schema);
