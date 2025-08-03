import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  DROP TABLE "blog_related_posts" CASCADE;
  DROP TABLE "_blog_v_version_related_posts" CASCADE;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  ALTER TABLE "blog" DROP COLUMN "category";
  ALTER TABLE "_blog_v" DROP COLUMN "version_category";
  DROP TYPE "public"."enum_blog_category";
  DROP TYPE "public"."enum__blog_v_version_category";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blog_category" AS ENUM('Web Design', 'Web Development', 'SEO', 'Marketing', 'Other');
  CREATE TYPE "public"."enum__blog_v_version_category" AS ENUM('Web Design', 'Web Development', 'SEO', 'Marketing', 'Other');
  CREATE TABLE "blog_related_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"post_id" integer
  );
  
  CREATE TABLE "_blog_v_version_related_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"post_id" integer,
  	"_uuid" varchar
  );
  
  DROP TABLE "users_sessions" CASCADE;
  ALTER TABLE "blog" ADD COLUMN "category" "enum_blog_category";
  ALTER TABLE "_blog_v" ADD COLUMN "version_category" "enum__blog_v_version_category";
  ALTER TABLE "blog_related_posts" ADD CONSTRAINT "blog_related_posts_post_id_blog_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_related_posts" ADD CONSTRAINT "blog_related_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_v_version_related_posts" ADD CONSTRAINT "_blog_v_version_related_posts_post_id_blog_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_v_version_related_posts" ADD CONSTRAINT "_blog_v_version_related_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "blog_related_posts_order_idx" ON "blog_related_posts" USING btree ("_order");
  CREATE INDEX "blog_related_posts_parent_id_idx" ON "blog_related_posts" USING btree ("_parent_id");
  CREATE INDEX "blog_related_posts_post_idx" ON "blog_related_posts" USING btree ("post_id");
  CREATE INDEX "_blog_v_version_related_posts_order_idx" ON "_blog_v_version_related_posts" USING btree ("_order");
  CREATE INDEX "_blog_v_version_related_posts_parent_id_idx" ON "_blog_v_version_related_posts" USING btree ("_parent_id");
  CREATE INDEX "_blog_v_version_related_posts_post_idx" ON "_blog_v_version_related_posts" USING btree ("post_id");`)
}
