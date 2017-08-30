import * as mongoose from 'mongoose'; // eslint-disable-line
import DataAccess from '../DataAccess';
import ICustomer from '../../model/customer/interfaces/ICustomer'; // eslint-disable-line

class CustomerSchema {
    static get schema() {
        let schemaDefinition: mongoose.SchemaDefinition = {
            name: {
                type: String,
                required: true,
                trim: true,
                min: 4,
                max: 50
            },
            phone: String,
            address: String,
            note: String,
            promotions: {
                type: [mongoose.Schema.Types.Mixed],
                default: []
            }
        };

        return DataAccess.initSchema(schemaDefinition);
    }
}

export default DataAccess.connection.model<ICustomer>('Customer', CustomerSchema.schema);
