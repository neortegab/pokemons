import { Table, Column, DataType, Model, BelongsTo, BelongsToMany, ForeignKey } from "sequelize-typescript";
import User from "./User";
import Pokemon from "./Pokemon";
import TeamPokemon from "./RelationshipTables/TeamPokemon";

@Table
class PokemonTeam extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: DataType.UUID })
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  @BelongsToMany(() => Pokemon, () => TeamPokemon)
  pokemons!: Pokemon[];
}

export default PokemonTeam;
