import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedUserPropertyToSchedule1661609585601 implements MigrationInterface {
    name = 'updatedUserPropertyToSchedule1661609585601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usersProperties" DROP COLUMN "teste"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usersProperties" ADD "teste" character varying NOT NULL`);
    }

}
