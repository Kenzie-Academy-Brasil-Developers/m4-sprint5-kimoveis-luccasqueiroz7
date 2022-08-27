import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Schedule } from "./schedule.entity";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity("users")
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule: Schedule[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
