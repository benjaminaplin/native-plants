import {MigrationInterface, QueryRunner} from "typeorm";

export class initTables1593662020777 implements MigrationInterface {
    name = 'initTables1593662020777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "preferred_environment" ("id" SERIAL NOT NULL, "environment" character varying NOT NULL, CONSTRAINT "PK_c47d569405611d451bac1dda608" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "plant" ("id" SERIAL NOT NULL, "botanical_name" character varying NOT NULL, "friendly_name" character varying NOT NULL, "light_requirements" integer NOT NULL, "growing_seasonality" integer NOT NULL, "plant_type" integer NOT NULL, CONSTRAINT "PK_97e1eb0d045aadea59401ece5ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "attribute" ("id" SERIAL NOT NULL, "attribute_name" character varying NOT NULL, CONSTRAINT "PK_b13fb7c5c9e9dff62b60e0de729" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "plant_attributes_attribute" ("plantId" integer NOT NULL, "attributeId" integer NOT NULL, CONSTRAINT "PK_535e37603a112ccde33dfe2503a" PRIMARY KEY ("plantId", "attributeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_344e81de04196b8ca49be2f959" ON "plant_attributes_attribute" ("plantId") `);
        await queryRunner.query(`CREATE INDEX "IDX_039dc5100a316bcb0b4fcf05c9" ON "plant_attributes_attribute" ("attributeId") `);
        await queryRunner.query(`CREATE TABLE "plant_preferred_environments_preferred_environment" ("plantId" integer NOT NULL, "preferredEnvironmentId" integer NOT NULL, CONSTRAINT "PK_f35b8b6e8d9a7f3908c0bcf9b1f" PRIMARY KEY ("plantId", "preferredEnvironmentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a8c638b152aec331a38f939f21" ON "plant_preferred_environments_preferred_environment" ("plantId") `);
        await queryRunner.query(`CREATE INDEX "IDX_15df606937d150c04d3d17ba69" ON "plant_preferred_environments_preferred_environment" ("preferredEnvironmentId") `);
        await queryRunner.query(`ALTER TABLE "plant_attributes_attribute" ADD CONSTRAINT "FK_344e81de04196b8ca49be2f959c" FOREIGN KEY ("plantId") REFERENCES "plant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plant_attributes_attribute" ADD CONSTRAINT "FK_039dc5100a316bcb0b4fcf05c91" FOREIGN KEY ("attributeId") REFERENCES "attribute"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plant_preferred_environments_preferred_environment" ADD CONSTRAINT "FK_a8c638b152aec331a38f939f215" FOREIGN KEY ("plantId") REFERENCES "plant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plant_preferred_environments_preferred_environment" ADD CONSTRAINT "FK_15df606937d150c04d3d17ba693" FOREIGN KEY ("preferredEnvironmentId") REFERENCES "preferred_environment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plant_preferred_environments_preferred_environment" DROP CONSTRAINT "FK_15df606937d150c04d3d17ba693"`);
        await queryRunner.query(`ALTER TABLE "plant_preferred_environments_preferred_environment" DROP CONSTRAINT "FK_a8c638b152aec331a38f939f215"`);
        await queryRunner.query(`ALTER TABLE "plant_attributes_attribute" DROP CONSTRAINT "FK_039dc5100a316bcb0b4fcf05c91"`);
        await queryRunner.query(`ALTER TABLE "plant_attributes_attribute" DROP CONSTRAINT "FK_344e81de04196b8ca49be2f959c"`);
        await queryRunner.query(`DROP INDEX "IDX_15df606937d150c04d3d17ba69"`);
        await queryRunner.query(`DROP INDEX "IDX_a8c638b152aec331a38f939f21"`);
        await queryRunner.query(`DROP TABLE "plant_preferred_environments_preferred_environment"`);
        await queryRunner.query(`DROP INDEX "IDX_039dc5100a316bcb0b4fcf05c9"`);
        await queryRunner.query(`DROP INDEX "IDX_344e81de04196b8ca49be2f959"`);
        await queryRunner.query(`DROP TABLE "plant_attributes_attribute"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "attribute"`);
        await queryRunner.query(`DROP TABLE "plant"`);
        await queryRunner.query(`DROP TABLE "preferred_environment"`);
    }

}
