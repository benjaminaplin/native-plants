/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import Plant from "./Plant";

@Entity()
export default class PreferredEnvironment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  environment!: string;

  @ManyToMany(
    (type) => Plant,
    (plant) => plant.preferredEnvironments,
    { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  plants!: Plant[];
}
