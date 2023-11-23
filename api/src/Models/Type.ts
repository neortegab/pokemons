import { Model, Column, Table, DataType, BelongsToMany } from "sequelize-typescript";
import Pokemon from "./Pokemon";
import PokemonType from "./PokemonType";

@Table
class Type extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @Column({ allowNull: false, unique: true })
  name!: string;

  @BelongsToMany(() => Pokemon, () => PokemonType)
  pokemons!: Pokemon[];
}

export default Type;
