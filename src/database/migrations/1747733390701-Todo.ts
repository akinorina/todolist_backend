import { MigrationInterface, QueryRunner } from 'typeorm';

export class Todo1747733390701 implements MigrationInterface {
  name = 'Todo1747733390701';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "todo" ("id" SERIAL NOT NULL, "todo" character varying NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id")); COMMENT ON COLUMN "todo"."id" IS 'ID'; COMMENT ON COLUMN "todo"."todo" IS 'todo'; COMMENT ON COLUMN "todo"."createdAt" IS '作成日時'; COMMENT ON COLUMN "todo"."updatedAt" IS '更新日時'; COMMENT ON COLUMN "todo"."deletedAt" IS '削除日時'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todo"`);
  }
}
