/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToMany } from "typeorm";
import Attribute from './Attribute'
import PreferredEnvironment from './PreferredEnvironment'

enum LightRequirements {
  Low,
  Medium,
  High
}
enum PlantTypes {
  Shrub,
  Tree,
  GroundCover,
  Vine
}
enum GrowingSeasonality {
  Perennial,
  Annual,
  Biennial
}

@Entity()
export default class Plant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  botanical_name!: string;

  @Column()
  friendly_name!: string;

  @Column()
  light_requirements!: LightRequirements;

  @Column()
  growing_seasonality!: GrowingSeasonality;

  @Column()
  plant_type!: PlantTypes;

  @ManyToMany(
    (type) => Attribute,
    (attribute) => attribute.plants,
    { nullable: true, onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinTable()
  attributes!: Attribute[];

  @ManyToMany(
    (type) => PreferredEnvironment,
    (preferredEnvironment) => preferredEnvironment.plants,
    { nullable: true, onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinTable()
  preferredEnvironments!: PreferredEnvironment[];
}
