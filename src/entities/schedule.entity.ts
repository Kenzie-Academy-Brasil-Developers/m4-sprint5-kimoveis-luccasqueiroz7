import { Column, Entity, ManyToOne, PrimaryColumn, Timestamp } from "typeorm";
import { Property } from "./property.entity";
import { User } from "./user.entity";
import { v4 as uuid } from "uuid";

@Entity("usersProperties")
export class Schedule {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  date: string;

  @Column()
  hour: string;

  @ManyToOne(() => User, { eager: true })
  user: string;

  @ManyToOne(() => Property, { eager: true })
  property: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
