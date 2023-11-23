import { Table, Model, Column, ForeignKey, DataType } from "sequelize-typescript";
import User from "./User";
import PokemonTeam from "./PokemonTeam";

@Table
class Battle extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  attackerId!: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  opponentId!: string;

  @ForeignKey(() => PokemonTeam)
  @Column({ allowNull: false })
  teamAttackerId!: string;

  @ForeignKey(() => PokemonTeam)
  @Column({ allowNull: false })
  teamOpponentId!: string;

  @ForeignKey(() => User)
  @Column
  winnerId!: string;
}

export default Battle;
