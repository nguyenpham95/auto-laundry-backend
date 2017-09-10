import * as mongoose from 'mongoose'; // eslint-disable-line
import DataAccess from '../DataAccess';
import IProduct from '../../model/product/interfaces/IProduct'; // eslint-disable-line

class ProductSchema {
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
                type: [ProductDetailSchema.schema],
                default: []
            }
        };

        return DataAccess.initSchema(schemaDefinition);
    }
}

class ProductDetailSchema {
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

        return new mongoose.Schema(schemaDefinition);
    }
}

export default DataAccess.connection.model<IProduct>('Product', ProductSchema.schema);
