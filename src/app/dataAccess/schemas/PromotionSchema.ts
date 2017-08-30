import * as mongoose from 'mongoose'; // eslint-disable-line
import DataAccess from '../DataAccess';
import IPromotion from '../../model/promotion/interfaces/IPromotion'; // eslint-disable-line

class PromotionSchema {
    static get schema() {
        let schemaDefinition: mongoose.SchemaDefinition = {
            name: {
                type: String,
                required: true,
                trim: true,
                min: 4,
                max: 50
            },
            status: {
                type: Number,
                required: true
            },
            detail: mongoose.Schema.Types.Mixed
        };

        return DataAccess.initSchema(schemaDefinition);
    }
}

export default DataAccess.connection.model<IPromotion>('Promotion', PromotionSchema.schema);
