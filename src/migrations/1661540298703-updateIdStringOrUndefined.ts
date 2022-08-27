import { MigrationInterface, QueryRunner } from "typeorm";

export class updateIdStringOrUndefined1661540298703 implements MigrationInterface {
    name = 'updateIdStringOrUndefined1661540298703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "arroz"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "arroz" character varying NOT NULL`);
    }

}
