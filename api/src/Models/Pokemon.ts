import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
class Pokemon extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  type!: string;

  @Column
  level!: number;
}

export default Pokemon;
