// models/ProductSpec.ts
import {
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  ForeignKey,
} from 'sequelize';
import { sequelize } from '../../util/sequelize.js';
import Product from './Product.js';

class ProductSpec extends Model<InferAttributes<ProductSpec>, InferCreationAttributes<ProductSpec>> {
  declare id: CreationOptional<number>;
  declare spec: string;
  declare productId: ForeignKey<Product['id']>;
}

ProductSpec.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    spec: {
      type: DataTypes.STRING
    },
    productId: {
      type: DataTypes.BIGINT,
      field: 'product_id',
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'product_specs',
    modelName: 'ProductSpec',
    timestamps: false,
  }
);

export default ProductSpec;
