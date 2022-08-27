import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Property } from "./property.entity";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany((type) => Property, (property) => property.category, {
    eager: true,
  })
  properties: Property[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
