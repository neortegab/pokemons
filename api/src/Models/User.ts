import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import PokemonTeam from "./PokemonTeam";

@Table
class User extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @Column({ allowNull: false, unique: true })
  username!: string;

  @Column({ allowNull: false })
  password!: string;

  @HasMany(() => PokemonTeam)
  pokemons!: PokemonTeam[];
}

export default User;
