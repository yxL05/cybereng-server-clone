import {
  Model,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import { sequelize } from '../../util/sequelize.js';
import Product from './Product.js';

class MediaUrl extends Model<InferAttributes<MediaUrl>, InferCreationAttributes<MediaUrl>> {
  declare id: CreationOptional<number>;
  declare src: string;
  declare isVideo: boolean;
  declare productId: ForeignKey<Product['id']>;
}

MediaUrl.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    src: {
      type: DataTypes.STRING,
    },
    isVideo: {
      type: DataTypes.BOOLEAN,
      field: 'is_video',
    },
    productId: {
      type: DataTypes.BIGINT,
      field: 'product_id',
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'media_urls',
    modelName: 'MediaUrl',
    timestamps: false,
  }
);

export default MediaUrl;
