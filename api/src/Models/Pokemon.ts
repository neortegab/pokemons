import { Table, Column, Model, DataType, BelongsToMany } from "sequelize-typescript";
import Type from "./Type";
import PokemonType from "./PokemonType";

@Table
class Pokemon extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  name!: string;

  @Column
  level!: number;

  @Column({ validate: { min: 1 } })
  attack!: number;

  @Column({ validate: { min: 1 } })
  defense!: number;

  @Column({ validate: { min: 1 } })
  hp!: number;

  @BelongsToMany(() => Type, () => PokemonType)
  types!: Type[];
}

export default Pokemon;
