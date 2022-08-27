import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedIdProperty1661542149128 implements MigrationInterface {
    name = 'updatedIdProperty1661542149128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "arroz"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "arroz" character varying NOT NULL`);
    }

}
