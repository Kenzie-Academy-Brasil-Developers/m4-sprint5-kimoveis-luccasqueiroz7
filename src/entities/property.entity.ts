import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";
import { v4 as uuid } from "uuid";

@Entity("properties")
export class Property {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column("decimal", { precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedule, (schedule) => schedule.property)
  schedules: Schedule[];

  @OneToOne((type) => Address, {
    eager: true,
  })
  @JoinColumn()
  address: Address;

  @ManyToOne((type) => Category, (category) => category.properties)
  category: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
