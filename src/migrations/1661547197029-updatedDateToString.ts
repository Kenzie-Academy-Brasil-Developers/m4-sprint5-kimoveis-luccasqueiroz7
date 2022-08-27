import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedDateToString1661547197029 implements MigrationInterface {
    name = 'updatedDateToString1661547197029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usersProperties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "usersProperties" ADD "date" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usersProperties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "usersProperties" ADD "date" TIMESTAMP NOT NULL`);
    }

}
