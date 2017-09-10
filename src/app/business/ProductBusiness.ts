import Product from '../model/product/Product';
import ProductCreate from '../model/product/ProductCreate'; // eslint-disable-line
import ProductUpdate from '../model/product/ProductUpdate'; // eslint-disable-line
import IProductBusiness from './interfaces/IProductBusiness'; // eslint-disable-line
import ProductRepository from '../repository/ProductRepository';

class ProductBusiness implements IProductBusiness {
    private productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    async getList(page: number, limit: number): Promise<Product[]> {
        let products = await this.productRepository.find(null, null, page, limit);
        return Product.parseArray(products);
    }

    async getCount(): Promise<number> {
        return await this.productRepository.getCount();
    }

    async get(_id: string): Promise<Product | null> {
        if (!_id)
            return null;

        let product = await this.productRepository.get(_id);
        return product && new Product(product);
    }

    async create(data: ProductCreate): Promise<Product> {
        let product;
        if (validateName(data.name))
            product = await this.productRepository.create(data);

        return product && new Product(product);
    }

    async update(_id: string, data: ProductUpdate): Promise<Product | null> {
        if (validateName(data.name))
            await this.productRepository.update(_id, data);

        return await this.get(_id);
    }

    async delete(_id: string): Promise<boolean> {
        return await this.productRepository.delete(_id);
    }
}

function validateName(name: string): boolean {
    if (!name)
        throw new Error('Name is required!');
    else if (name.trim().length < 4)
        throw new Error('Minimum name is 4 characters!');

    return true;
}

Object.seal(ProductBusiness);
export default ProductBusiness;
