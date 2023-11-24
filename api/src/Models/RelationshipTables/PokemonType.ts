import { Table, Model, Column, ForeignKey, DataType } from "sequelize-typescript";
import Pokemon from "../Pokemon";
import Type from "../Type";

@Table
class PokemonType extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @ForeignKey(() => Pokemon)
  @Column({ allowNull: false })
  pokemonId!: string;

  @ForeignKey(() => Type)
  @Column({ allowNull: false })
  typeId!: string;
}

export default PokemonType;
