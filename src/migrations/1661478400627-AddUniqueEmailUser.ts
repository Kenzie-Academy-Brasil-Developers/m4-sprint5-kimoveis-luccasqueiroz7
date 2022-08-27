import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueEmailUser1661478400627 implements MigrationInterface {
    name = 'AddUniqueEmailUser1661478400627'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "teste"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "teste" character varying`);
    }

}
