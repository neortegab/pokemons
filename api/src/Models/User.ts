import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import PokemonTeam from "./PokemonTeam";
import Battle from "./Battle";

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

  @HasMany(() => Battle)
  battles!: Battle[];
}

export default User;
