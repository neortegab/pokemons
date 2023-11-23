import { Model, Column, Table, DataType } from "sequelize-typescript";

@Table
class Type extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @Column
  name!: string;
}

export default Type;
