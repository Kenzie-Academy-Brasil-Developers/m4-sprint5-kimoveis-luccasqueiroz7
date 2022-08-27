import { MigrationInterface, QueryRunner } from "typeorm";

export class updateHourColumnscheduleTable1661476118669
  implements MigrationInterface
{
  name = "updateHourColumnscheduleTable1661476118669";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "usersProperties" DROP COLUMN "hour"`);
    await queryRunner.query(
      `ALTER TABLE "usersProperties" ADD "hour" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "usersProperties" DROP COLUMN "hour"`);
    await queryRunner.query(
      `ALTER TABLE "usersProperties" ADD "hour" TIMESTAMP NOT NULL`
    );
  }
}
