import Product from './Product.js';
import ProductSpec from './ProductSpec.js';
import MediaUrl from './MediaUrl.js';

const associateProduct = () => {
  // Product to ProductSpec (one-to-many)
  Product.hasMany(ProductSpec, {
    as: 'descSpecList',
    foreignKey: { name: 'productId', field: 'product_id' },
    onDelete: 'CASCADE',
  });

  ProductSpec.belongsTo(Product, {
    as: 'product',
    foreignKey: { name: 'productId', field: 'product_id' },
  });

  // Product to MediaUrl (one-to-many)
  Product.hasMany(MediaUrl, {
    as: 'mediaUrlList',
    foreignKey: { name: 'productId', field: 'product_id' },
    onDelete: 'CASCADE',
  });

  MediaUrl.belongsTo(Product, {
    as: 'product',
    foreignKey: { name: 'productId', field: 'product_id' },
  });
}

export default associateProduct;