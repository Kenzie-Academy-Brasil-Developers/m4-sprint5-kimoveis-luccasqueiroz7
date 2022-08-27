import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedIdTrue1661541022776 implements MigrationInterface {
    name = 'updatedIdTrue1661541022776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "arroz"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "arroz" character varying NOT NULL`);
    }

}
