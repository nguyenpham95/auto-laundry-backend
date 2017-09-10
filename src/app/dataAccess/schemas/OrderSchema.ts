import * as mongoose from 'mongoose'; // eslint-disable-line
import DataAccess from '../DataAccess';
import IOrder from '../../model/order/interfaces/IOrder'; // eslint-disable-line

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
                type: [OrderDetailSchema.schema],
                default: []
            }
        };

        return DataAccess.initSchema(schemaDefinition);
    }
}

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

        return new mongoose.Schema(schemaDefinition);
    }
}

export default DataAccess.connection.model<IOrder>('Order', OrderSchema.schema);
