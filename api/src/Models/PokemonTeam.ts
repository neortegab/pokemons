import { Table, Column, DataType, Model, BelongsTo, BelongsToMany } from "sequelize-typescript";
import User from "./User";
import Pokemon from "./Pokemon";
import TeamPokemon from "./TeamPokemon";

@Table
class PokemonTeam extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @BelongsTo(() => User)
  user!: User;

  @BelongsToMany(() => Pokemon, () => TeamPokemon)
  pokemons!: Pokemon[];
}

export default PokemonTeam;
