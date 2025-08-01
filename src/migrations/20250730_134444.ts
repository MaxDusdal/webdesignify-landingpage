import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies_statistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_project_summary_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_project_summary_service_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_challenge_challenges" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_solution_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_solution_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_in_house_software_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_results_metrics_statistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies_results_metrics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "case_studies" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_statistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_project_summary_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_project_summary_service_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_challenge_challenges" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_solution_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_solution_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_in_house_software_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_results_metrics_statistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v_version_results_metrics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_case_studies_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "case_studies_statistics" CASCADE;
  DROP TABLE "case_studies_project_summary_timeline_items" CASCADE;
  DROP TABLE "case_studies_project_summary_service_items" CASCADE;
  DROP TABLE "case_studies_challenge_challenges" CASCADE;
  DROP TABLE "case_studies_solution_points" CASCADE;
  DROP TABLE "case_studies_solution_tabs" CASCADE;
  DROP TABLE "case_studies_in_house_software_points" CASCADE;
  DROP TABLE "case_studies_results_metrics_statistics" CASCADE;
  DROP TABLE "case_studies_results_metrics" CASCADE;
  DROP TABLE "case_studies" CASCADE;
  DROP TABLE "_case_studies_v_version_statistics" CASCADE;
  DROP TABLE "_case_studies_v_version_project_summary_timeline_items" CASCADE;
  DROP TABLE "_case_studies_v_version_project_summary_service_items" CASCADE;
  DROP TABLE "_case_studies_v_version_challenge_challenges" CASCADE;
  DROP TABLE "_case_studies_v_version_solution_points" CASCADE;
  DROP TABLE "_case_studies_v_version_solution_tabs" CASCADE;
  DROP TABLE "_case_studies_v_version_in_house_software_points" CASCADE;
  DROP TABLE "_case_studies_v_version_results_metrics_statistics" CASCADE;
  DROP TABLE "_case_studies_v_version_results_metrics" CASCADE;
  DROP TABLE "_case_studies_v" CASCADE;
  ALTER TABLE "projekte" DROP CONSTRAINT "projekte_case_study_id_case_studies_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_case_studies_fk";
  
  DROP INDEX IF EXISTS "projekte_case_study_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_case_studies_id_idx";
  ALTER TABLE "projekte" ADD COLUMN "project_date" timestamp(3) with time zone;
  ALTER TABLE "projekte" DROP COLUMN IF EXISTS "case_study_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "case_studies_id";
  DROP TYPE "public"."enum_case_studies_statistics_icon";
  DROP TYPE "public"."enum_case_studies_results_metrics_icon";
  DROP TYPE "public"."enum_case_studies_status";
  DROP TYPE "public"."enum__case_studies_v_version_statistics_icon";
  DROP TYPE "public"."enum__case_studies_v_version_results_metrics_icon";
  DROP TYPE "public"."enum__case_studies_v_version_status";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_case_studies_statistics_icon" AS ENUM('search', 'star', 'calendar', 'clock');
  CREATE TYPE "public"."enum_case_studies_results_metrics_icon" AS ENUM('trendingUp', 'lineChart', 'users');
  CREATE TYPE "public"."enum_case_studies_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__case_studies_v_version_statistics_icon" AS ENUM('search', 'star', 'calendar', 'clock');
  CREATE TYPE "public"."enum__case_studies_v_version_results_metrics_icon" AS ENUM('trendingUp', 'lineChart', 'users');
  CREATE TYPE "public"."enum__case_studies_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "case_studies_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_case_studies_statistics_icon",
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_project_summary_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_project_summary_service_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_challenge_challenges" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_solution_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_solution_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"value" varchar,
  	"image_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_in_house_software_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_results_metrics_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"before" varchar,
  	"after" varchar,
  	"improvement" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies_results_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar,
  	"icon" "enum_case_studies_results_metrics_icon"
  );
  
  CREATE TABLE IF NOT EXISTS "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"title" varchar,
  	"description" varchar,
  	"hero_image_id" integer,
  	"hero_c_t_a_button_text" varchar DEFAULT 'Zum Projekt',
  	"hero_c_t_a_button_link" varchar,
  	"project_summary_content" jsonb,
  	"challenge_description" varchar,
  	"challenge_summary" varchar,
  	"challenge_image_group_image_id" integer,
  	"challenge_image_group_image_description" varchar,
  	"solution_description" varchar DEFAULT 'Wir entwickelten eine umfassende digitale Strategie, die sowohl die Onlinepräsenz als auch die betrieblichen Abläufe des Restaurants revolutionierte.',
  	"in_house_software_title" varchar DEFAULT 'In-House Software',
  	"in_house_software_description" varchar,
  	"in_house_software_cta_text" varchar DEFAULT 'Mehr über Software XY erfahren',
  	"in_house_software_cta_link" varchar,
  	"results_description" varchar DEFAULT 'Die digitale Transformation führte zu messbaren Verbesserungen in allen Geschäftsbereichen des Restaurants Bergblick.',
  	"testimonial_quote" varchar,
  	"testimonial_author_name" varchar,
  	"testimonial_author_title" varchar,
  	"testimonial_author_image_id" integer,
  	"conclusion_content" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_case_studies_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_version_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__case_studies_v_version_statistics_icon",
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_version_project_summary_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_version_project_summary_service_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_version_challenge_challenges" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_version_solution_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_version_solution_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"value" varchar,
  	"image_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_version_in_house_software_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_version_results_metrics_statistics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"before" varchar,
  	"after" varchar,
  	"improvement" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v_version_results_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar,
  	"icon" "enum__case_studies_v_version_results_metrics_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_case_studies_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_hero_image_id" integer,
  	"version_hero_c_t_a_button_text" varchar DEFAULT 'Zum Projekt',
  	"version_hero_c_t_a_button_link" varchar,
  	"version_project_summary_content" jsonb,
  	"version_challenge_description" varchar,
  	"version_challenge_summary" varchar,
  	"version_challenge_image_group_image_id" integer,
  	"version_challenge_image_group_image_description" varchar,
  	"version_solution_description" varchar DEFAULT 'Wir entwickelten eine umfassende digitale Strategie, die sowohl die Onlinepräsenz als auch die betrieblichen Abläufe des Restaurants revolutionierte.',
  	"version_in_house_software_title" varchar DEFAULT 'In-House Software',
  	"version_in_house_software_description" varchar,
  	"version_in_house_software_cta_text" varchar DEFAULT 'Mehr über Software XY erfahren',
  	"version_in_house_software_cta_link" varchar,
  	"version_results_description" varchar DEFAULT 'Die digitale Transformation führte zu messbaren Verbesserungen in allen Geschäftsbereichen des Restaurants Bergblick.',
  	"version_testimonial_quote" varchar,
  	"version_testimonial_author_name" varchar,
  	"version_testimonial_author_title" varchar,
  	"version_testimonial_author_image_id" integer,
  	"version_conclusion_content" jsonb,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__case_studies_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "projekte" ADD COLUMN "case_study_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "case_studies_id" integer;
  DO $$ BEGIN
   ALTER TABLE "case_studies_statistics" ADD CONSTRAINT "case_studies_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_project_summary_timeline_items" ADD CONSTRAINT "case_studies_project_summary_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_project_summary_service_items" ADD CONSTRAINT "case_studies_project_summary_service_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_challenge_challenges" ADD CONSTRAINT "case_studies_challenge_challenges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_solution_points" ADD CONSTRAINT "case_studies_solution_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_solution_tabs" ADD CONSTRAINT "case_studies_solution_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_solution_tabs" ADD CONSTRAINT "case_studies_solution_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_in_house_software_points" ADD CONSTRAINT "case_studies_in_house_software_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_results_metrics_statistics" ADD CONSTRAINT "case_studies_results_metrics_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_results_metrics"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies_results_metrics" ADD CONSTRAINT "case_studies_results_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_challenge_image_group_image_id_media_id_fk" FOREIGN KEY ("challenge_image_group_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_testimonial_author_image_id_media_id_fk" FOREIGN KEY ("testimonial_author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_statistics" ADD CONSTRAINT "_case_studies_v_version_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_project_summary_timeline_items" ADD CONSTRAINT "_case_studies_v_version_project_summary_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_project_summary_service_items" ADD CONSTRAINT "_case_studies_v_version_project_summary_service_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_challenge_challenges" ADD CONSTRAINT "_case_studies_v_version_challenge_challenges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_solution_points" ADD CONSTRAINT "_case_studies_v_version_solution_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_solution_tabs" ADD CONSTRAINT "_case_studies_v_version_solution_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_solution_tabs" ADD CONSTRAINT "_case_studies_v_version_solution_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_in_house_software_points" ADD CONSTRAINT "_case_studies_v_version_in_house_software_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_results_metrics_statistics" ADD CONSTRAINT "_case_studies_v_version_results_metrics_statistics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_version_results_metrics"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v_version_results_metrics" ADD CONSTRAINT "_case_studies_v_version_results_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_parent_id_case_studies_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_challenge_image_group_image_id_media_id_fk" FOREIGN KEY ("version_challenge_image_group_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_testimonial_author_image_id_media_id_fk" FOREIGN KEY ("version_testimonial_author_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "case_studies_statistics_order_idx" ON "case_studies_statistics" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_statistics_parent_id_idx" ON "case_studies_statistics" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_project_summary_timeline_items_order_idx" ON "case_studies_project_summary_timeline_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_project_summary_timeline_items_parent_id_idx" ON "case_studies_project_summary_timeline_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_project_summary_service_items_order_idx" ON "case_studies_project_summary_service_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_project_summary_service_items_parent_id_idx" ON "case_studies_project_summary_service_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_challenge_challenges_order_idx" ON "case_studies_challenge_challenges" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_challenge_challenges_parent_id_idx" ON "case_studies_challenge_challenges" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_solution_points_order_idx" ON "case_studies_solution_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_solution_points_parent_id_idx" ON "case_studies_solution_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_solution_tabs_order_idx" ON "case_studies_solution_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_solution_tabs_parent_id_idx" ON "case_studies_solution_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_solution_tabs_image_idx" ON "case_studies_solution_tabs" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "case_studies_in_house_software_points_order_idx" ON "case_studies_in_house_software_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_in_house_software_points_parent_id_idx" ON "case_studies_in_house_software_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_results_metrics_statistics_order_idx" ON "case_studies_results_metrics_statistics" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_results_metrics_statistics_parent_id_idx" ON "case_studies_results_metrics_statistics" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "case_studies_results_metrics_order_idx" ON "case_studies_results_metrics" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "case_studies_results_metrics_parent_id_idx" ON "case_studies_results_metrics" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "case_studies_slug_idx" ON "case_studies" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "case_studies_hero_image_idx" ON "case_studies" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "case_studies_challenge_image_group_challenge_image_group_image_idx" ON "case_studies" USING btree ("challenge_image_group_image_id");
  CREATE INDEX IF NOT EXISTS "case_studies_testimonial_author_testimonial_author_image_idx" ON "case_studies" USING btree ("testimonial_author_image_id");
  CREATE INDEX IF NOT EXISTS "case_studies_updated_at_idx" ON "case_studies" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "case_studies__status_idx" ON "case_studies" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_statistics_order_idx" ON "_case_studies_v_version_statistics" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_statistics_parent_id_idx" ON "_case_studies_v_version_statistics" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_project_summary_timeline_items_order_idx" ON "_case_studies_v_version_project_summary_timeline_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_project_summary_timeline_items_parent_id_idx" ON "_case_studies_v_version_project_summary_timeline_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_project_summary_service_items_order_idx" ON "_case_studies_v_version_project_summary_service_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_project_summary_service_items_parent_id_idx" ON "_case_studies_v_version_project_summary_service_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_challenge_challenges_order_idx" ON "_case_studies_v_version_challenge_challenges" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_challenge_challenges_parent_id_idx" ON "_case_studies_v_version_challenge_challenges" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_solution_points_order_idx" ON "_case_studies_v_version_solution_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_solution_points_parent_id_idx" ON "_case_studies_v_version_solution_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_solution_tabs_order_idx" ON "_case_studies_v_version_solution_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_solution_tabs_parent_id_idx" ON "_case_studies_v_version_solution_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_solution_tabs_image_idx" ON "_case_studies_v_version_solution_tabs" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_in_house_software_points_order_idx" ON "_case_studies_v_version_in_house_software_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_in_house_software_points_parent_id_idx" ON "_case_studies_v_version_in_house_software_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_results_metrics_statistics_order_idx" ON "_case_studies_v_version_results_metrics_statistics" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_results_metrics_statistics_parent_id_idx" ON "_case_studies_v_version_results_metrics_statistics" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_results_metrics_order_idx" ON "_case_studies_v_version_results_metrics" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_results_metrics_parent_id_idx" ON "_case_studies_v_version_results_metrics" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_parent_idx" ON "_case_studies_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_version_slug_idx" ON "_case_studies_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_version_hero_image_idx" ON "_case_studies_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_challenge_image_group_version_challenge_image_group_image_idx" ON "_case_studies_v" USING btree ("version_challenge_image_group_image_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_testimonial_author_version_testimonial_author_image_idx" ON "_case_studies_v" USING btree ("version_testimonial_author_image_id");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_version_updated_at_idx" ON "_case_studies_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_version_created_at_idx" ON "_case_studies_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_version_version__status_idx" ON "_case_studies_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_created_at_idx" ON "_case_studies_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_updated_at_idx" ON "_case_studies_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_latest_idx" ON "_case_studies_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_case_studies_v_autosave_idx" ON "_case_studies_v" USING btree ("autosave");
  DO $$ BEGIN
   ALTER TABLE "projekte" ADD CONSTRAINT "projekte_case_study_id_case_studies_id_fk" FOREIGN KEY ("case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "projekte_case_study_idx" ON "projekte" USING btree ("case_study_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  ALTER TABLE "projekte" DROP COLUMN IF EXISTS "project_date";`)
}
