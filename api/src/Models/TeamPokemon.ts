import { Table, Model, Column, ForeignKey, DataType } from "sequelize-typescript";
import Pokemon from "./Pokemon";
import PokemonTeam from "./PokemonTeam";

@Table
class TeamPokemon extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @ForeignKey(() => Pokemon)
  @Column({ allowNull: false })
  pokemonId!: string;

  @ForeignKey(() => PokemonTeam)
  @Column({ allowNull: false })
  teamId!: string;
}

export default TeamPokemon;
