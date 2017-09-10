import BaseController from './base/BaseController';
import ProductBusiness from '../app/business/ProductBusiness';
import IProductBusiness from '../app/business/interfaces/IProductBusiness';
import ProductCreate from '../app/model/product/ProductCreate';
import ProductUpdate from '../app/model/product/ProductUpdate';
import Authenticator from '../system/Authenticator';

class ProductController extends BaseController {
    private productBusiness: IProductBusiness = new ProductBusiness();

    constructor() {
        super();

        this.get('/list/:page/:limit', this.getProducts.bind(this));
        this.get('/list/count', this.getCountProducts.bind(this));
        this.get('/:_id', this.getProductById.bind(this));
        this.post('/', Authenticator.isAuthenticated, this.createProduct.bind(this));
        this.put('/:_id', Authenticator.isAuthenticated, this.updateProduct.bind(this));
        this.delete('/:_id', Authenticator.isHandlerRoles('Administrator'), this.deleteProduct.bind(this));
    }

    async getProducts(req): Promise<any> {
        return await this.productBusiness.getList(req.params.page, req.params.limit);
    }

    async getCountProducts(req): Promise<any> {
        return await this.productBusiness.getCount();
    }

    async getProductById(req): Promise<any> {
        return await this.productBusiness.get(req.params._id);
    }

    async createProduct(req): Promise<any> {
        return await this.productBusiness.create(new ProductCreate(req.body));
    }

    async updateProduct(req): Promise<any> {
        return await this.productBusiness.update(req.params._id, new ProductUpdate(req.body));
    }

    async deleteProduct(req): Promise<any> {
        return await this.productBusiness.delete(req.params._id);
    }
}

Object.seal(ProductController);
export default ProductController;
