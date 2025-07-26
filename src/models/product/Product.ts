import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  HasManyGetAssociationsMixin,
} from 'sequelize';
import { sequelize } from '../../util/sequelize.js';
import ProductSpec from './ProductSpec.js';
import MediaUrl from './MediaUrl.js';

class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare price: number;
  declare pageName: string;
  declare descShort: string;
  declare descLong1: string;
  declare descLong2: string;
  declare inStock: boolean;

  // Lazy loading methods
  declare getDescSpecList: HasManyGetAssociationsMixin<ProductSpec>;
  declare getMediaUrlList: HasManyGetAssociationsMixin<MediaUrl>;
}

Product.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    pageName: {
      type: DataTypes.STRING,
      field: 'page_name',
    },
    descShort: {
      type: DataTypes.STRING,
      field: 'desc_short',
    },
    descLong1: {
      type: DataTypes.STRING,
      field: 'desc_long1',
    },
    descLong2: {
      type: DataTypes.STRING,
      field: 'desc_long2',
    },
    inStock: {
      type: DataTypes.BOOLEAN,
      field: 'in_stock',
    },
  },
  {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
    timestamps: false,
  }
);

export default Product;
