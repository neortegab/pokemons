import { Table, Model, Column, ForeignKey, DataType, BelongsTo } from "sequelize-typescript";
import User from "./User";
import PokemonTeam from "./PokemonTeam";

@Table
class Battle extends Model {
  @Column({ primaryKey: true, type: DataType.UUID })
  id!: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: DataType.UUID })
  attackerId!: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: DataType.UUID })
  opponentId!: string;

  @ForeignKey(() => PokemonTeam)
  @Column({ allowNull: false, type: DataType.UUID })
  teamAttackerId!: string;

  @ForeignKey(() => PokemonTeam)
  @Column({ allowNull: false, type: DataType.UUID })
  teamOpponentId!: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  winnerId!: string;

  @BelongsTo(() => User, "winnerId")
  winner!: User;

  @BelongsTo(() => User, "attackerId")
  attacker!: User;

  @BelongsTo(() => User, "opponentId")
  opponent!: User;

  @BelongsTo(() => PokemonTeam, "teamAttackerId")
  attackerTeam!: PokemonTeam;

  @BelongsTo(() => PokemonTeam, "teamOpponentId")
  opponentTeam!: PokemonTeam;
}

export default Battle;
