/* eslint-disable @typescript-eslint/no-unused-vars */
import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blog_category" AS ENUM('Web Design', 'Web Development', 'SEO', 'Marketing', 'Other');
  CREATE TYPE "public"."enum_blog_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blog_v_version_category" AS ENUM('Web Design', 'Web Development', 'SEO', 'Marketing', 'Other');
  CREATE TYPE "public"."enum__blog_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_case_studies_statistics_icon" AS ENUM('search', 'star', 'calendar', 'clock');
  CREATE TYPE "public"."enum_case_studies_results_metrics_icon" AS ENUM('trendingUp', 'lineChart', 'users');
  CREATE TYPE "public"."enum_case_studies_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__case_studies_v_version_statistics_icon" AS ENUM('search', 'star', 'calendar', 'clock');
  CREATE TYPE "public"."enum__case_studies_v_version_results_metrics_icon" AS ENUM('trendingUp', 'lineChart', 'users');
  CREATE TYPE "public"."enum__case_studies_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_contact_forms_current_marketing" AS ENUM('analytics', 'ads', 'social', 'email', 'seo', 'none');
  CREATE TYPE "public"."enum_contact_forms_project_type" AS ENUM('web-design', 'web-development', 'seo-optimization', 'online-marketing', 'content-creation', 'consulting');
  CREATE TYPE "public"."enum_contact_forms_industry" AS ENUM('restaurants', 'medical', 'legal', 'trades', 'realestate', 'consulting', 'fitness', 'education', 'events', 'other');
  CREATE TYPE "public"."enum_contact_forms_business_size" AS ENUM('1-10', '11-50', '51-200', '201+');
  CREATE TYPE "public"."enum_contact_forms_has_website" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_contact_forms_timeline" AS ENUM('immediately', '1-month', '3-months', '6-months', 'exploring');
  CREATE TYPE "public"."enum_contact_forms_budget" AS ENUM('under-2k', '2k-5k', '5k-10k', '10k-20k', 'over-20k', 'not-sure');
  CREATE TYPE "public"."enum_contact_forms_how_did_you_hear" AS ENUM('search', 'social', 'referral', 'blog', 'other');
  CREATE TYPE "public"."enum_contact_forms_status" AS ENUM('new', 'in-progress', 'contacted', 'closed');
  CREATE TYPE "public"."enum_impressum_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__impressum_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_datenschutz_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__datenschutz_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_faq_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__faq_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_related_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"post_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "blog" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"date" timestamp(3) with time zone,
  	"category" "enum_blog_category",
  	"slug" varchar,
  	"status" "enum_blog_status",
  	"author_id" integer,
  	"read_time" numeric,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_blog_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v_version_related_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"post_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"version_content" jsonb,
  	"version_image_id" integer,
  	"version_date" timestamp(3) with time zone,
  	"version_category" "enum__blog_v_version_category",
  	"version_slug" varchar,
  	"version_status" "enum__blog_v_version_status",
  	"version_author_id" integer,
  	"version_read_time" numeric,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__blog_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "author_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "author" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"user_id" integer NOT NULL,
  	"image_id" integer NOT NULL,
  	"bio" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
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
  
  CREATE TABLE IF NOT EXISTS "contact_forms_current_marketing" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_contact_forms_current_marketing",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "contact_forms_project_type" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_contact_forms_project_type",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "contact_forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"company_name" varchar,
  	"industry" "enum_contact_forms_industry",
  	"business_size" "enum_contact_forms_business_size",
  	"has_website" "enum_contact_forms_has_website" NOT NULL,
  	"website_url" varchar,
  	"timeline" "enum_contact_forms_timeline" NOT NULL,
  	"budget" "enum_contact_forms_budget" NOT NULL,
  	"message" varchar,
  	"how_did_you_hear" "enum_contact_forms_how_did_you_hear",
  	"status" "enum_contact_forms_status" DEFAULT 'new' NOT NULL,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "projekte_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "projekte" (
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"case_study_id" integer,
  	"url" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"blog_id" integer,
  	"author_id" integer,
  	"case_studies_id" integer,
  	"contact_forms_id" integer,
  	"projekte_id" varchar,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "impressum" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"last_updated" timestamp(3) with time zone,
  	"content" jsonb,
  	"_status" "enum_impressum_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "_impressum_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_title" varchar,
  	"version_last_updated" timestamp(3) with time zone,
  	"version_content" jsonb,
  	"version__status" "enum__impressum_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "datenschutz" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"last_updated" timestamp(3) with time zone,
  	"content" jsonb,
  	"_status" "enum_datenschutz_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "_datenschutz_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_title" varchar,
  	"version_last_updated" timestamp(3) with time zone,
  	"version_content" jsonb,
  	"version__status" "enum__datenschutz_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "faq_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "faq" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_faq_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "_faq_v_version_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_faq_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__faq_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  DO $$ BEGIN
   ALTER TABLE "blog_tags" ADD CONSTRAINT "blog_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_related_posts" ADD CONSTRAINT "blog_related_posts_post_id_blog_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_related_posts" ADD CONSTRAINT "blog_related_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog" ADD CONSTRAINT "blog_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog" ADD CONSTRAINT "blog_author_id_author_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."author"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog" ADD CONSTRAINT "blog_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_version_tags" ADD CONSTRAINT "_blog_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_version_related_posts" ADD CONSTRAINT "_blog_v_version_related_posts_post_id_blog_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_version_related_posts" ADD CONSTRAINT "_blog_v_version_related_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_parent_id_blog_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_version_author_id_author_id_fk" FOREIGN KEY ("version_author_id") REFERENCES "public"."author"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "author_social_links" ADD CONSTRAINT "author_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."author"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "author" ADD CONSTRAINT "author_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "author" ADD CONSTRAINT "author_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
  
  DO $$ BEGIN
   ALTER TABLE "contact_forms_current_marketing" ADD CONSTRAINT "contact_forms_current_marketing_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contact_forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contact_forms_project_type" ADD CONSTRAINT "contact_forms_project_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contact_forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projekte_tags" ADD CONSTRAINT "projekte_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projekte"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projekte" ADD CONSTRAINT "projekte_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projekte" ADD CONSTRAINT "projekte_case_study_id_case_studies_id_fk" FOREIGN KEY ("case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_author_fk" FOREIGN KEY ("author_id") REFERENCES "public"."author"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_forms_fk" FOREIGN KEY ("contact_forms_id") REFERENCES "public"."contact_forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projekte_fk" FOREIGN KEY ("projekte_id") REFERENCES "public"."projekte"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faq_faq_items" ADD CONSTRAINT "faq_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_faq_v_version_faq_items" ADD CONSTRAINT "_faq_v_version_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faq_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "blog_tags_order_idx" ON "blog_tags" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_tags_parent_id_idx" ON "blog_tags" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_related_posts_order_idx" ON "blog_related_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_related_posts_parent_id_idx" ON "blog_related_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_related_posts_post_idx" ON "blog_related_posts" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "blog_image_idx" ON "blog" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blog_author_idx" ON "blog" USING btree ("author_id");
  CREATE INDEX IF NOT EXISTS "blog_meta_meta_image_idx" ON "blog" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "blog_updated_at_idx" ON "blog" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blog_created_at_idx" ON "blog" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "blog__status_idx" ON "blog" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_tags_order_idx" ON "_blog_v_version_tags" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_tags_parent_id_idx" ON "_blog_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_related_posts_order_idx" ON "_blog_v_version_related_posts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_related_posts_parent_id_idx" ON "_blog_v_version_related_posts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_related_posts_post_idx" ON "_blog_v_version_related_posts" USING btree ("post_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_parent_idx" ON "_blog_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_image_idx" ON "_blog_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_author_idx" ON "_blog_v" USING btree ("version_author_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_meta_version_meta_image_idx" ON "_blog_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_updated_at_idx" ON "_blog_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_created_at_idx" ON "_blog_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version__status_idx" ON "_blog_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_blog_v_created_at_idx" ON "_blog_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_updated_at_idx" ON "_blog_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_latest_idx" ON "_blog_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_blog_v_autosave_idx" ON "_blog_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "author_social_links_order_idx" ON "author_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "author_social_links_parent_id_idx" ON "author_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "author_user_idx" ON "author" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "author_image_idx" ON "author" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "author_updated_at_idx" ON "author" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "author_created_at_idx" ON "author" USING btree ("created_at");
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
  CREATE INDEX IF NOT EXISTS "contact_forms_current_marketing_order_idx" ON "contact_forms_current_marketing" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "contact_forms_current_marketing_parent_idx" ON "contact_forms_current_marketing" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "contact_forms_project_type_order_idx" ON "contact_forms_project_type" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "contact_forms_project_type_parent_idx" ON "contact_forms_project_type" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "contact_forms_updated_at_idx" ON "contact_forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "contact_forms_created_at_idx" ON "contact_forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "projekte_tags_order_idx" ON "projekte_tags" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projekte_tags_parent_id_idx" ON "projekte_tags" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projekte_image_idx" ON "projekte" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "projekte_case_study_idx" ON "projekte" USING btree ("case_study_id");
  CREATE INDEX IF NOT EXISTS "projekte_updated_at_idx" ON "projekte" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "projekte_created_at_idx" ON "projekte" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blog_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_author_id_idx" ON "payload_locked_documents_rels" USING btree ("author_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contact_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_projekte_id_idx" ON "payload_locked_documents_rels" USING btree ("projekte_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "impressum__status_idx" ON "impressum" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_impressum_v_version_version__status_idx" ON "_impressum_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_impressum_v_created_at_idx" ON "_impressum_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_impressum_v_updated_at_idx" ON "_impressum_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_impressum_v_latest_idx" ON "_impressum_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_impressum_v_autosave_idx" ON "_impressum_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "datenschutz__status_idx" ON "datenschutz" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_datenschutz_v_version_version__status_idx" ON "_datenschutz_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_datenschutz_v_created_at_idx" ON "_datenschutz_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_datenschutz_v_updated_at_idx" ON "_datenschutz_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_datenschutz_v_latest_idx" ON "_datenschutz_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_datenschutz_v_autosave_idx" ON "_datenschutz_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "faq_faq_items_order_idx" ON "faq_faq_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "faq_faq_items_parent_id_idx" ON "faq_faq_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "faq__status_idx" ON "faq" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_faq_v_version_faq_items_order_idx" ON "_faq_v_version_faq_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_faq_v_version_faq_items_parent_id_idx" ON "_faq_v_version_faq_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_faq_v_version_version__status_idx" ON "_faq_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_faq_v_created_at_idx" ON "_faq_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_faq_v_updated_at_idx" ON "_faq_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_faq_v_latest_idx" ON "_faq_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_faq_v_autosave_idx" ON "_faq_v" USING btree ("autosave");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "media" CASCADE;
  DROP TABLE "blog_tags" CASCADE;
  DROP TABLE "blog_related_posts" CASCADE;
  DROP TABLE "blog" CASCADE;
  DROP TABLE "_blog_v_version_tags" CASCADE;
  DROP TABLE "_blog_v_version_related_posts" CASCADE;
  DROP TABLE "_blog_v" CASCADE;
  DROP TABLE "author_social_links" CASCADE;
  DROP TABLE "author" CASCADE;
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
  DROP TABLE "contact_forms_current_marketing" CASCADE;
  DROP TABLE "contact_forms_project_type" CASCADE;
  DROP TABLE "contact_forms" CASCADE;
  DROP TABLE "projekte_tags" CASCADE;
  DROP TABLE "projekte" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "impressum" CASCADE;
  DROP TABLE "_impressum_v" CASCADE;
  DROP TABLE "datenschutz" CASCADE;
  DROP TABLE "_datenschutz_v" CASCADE;
  DROP TABLE "faq_faq_items" CASCADE;
  DROP TABLE "faq" CASCADE;
  DROP TABLE "_faq_v_version_faq_items" CASCADE;
  DROP TABLE "_faq_v" CASCADE;
  DROP TYPE "public"."enum_blog_category";
  DROP TYPE "public"."enum_blog_status";
  DROP TYPE "public"."enum__blog_v_version_category";
  DROP TYPE "public"."enum__blog_v_version_status";
  DROP TYPE "public"."enum_case_studies_statistics_icon";
  DROP TYPE "public"."enum_case_studies_results_metrics_icon";
  DROP TYPE "public"."enum_case_studies_status";
  DROP TYPE "public"."enum__case_studies_v_version_statistics_icon";
  DROP TYPE "public"."enum__case_studies_v_version_results_metrics_icon";
  DROP TYPE "public"."enum__case_studies_v_version_status";
  DROP TYPE "public"."enum_contact_forms_current_marketing";
  DROP TYPE "public"."enum_contact_forms_project_type";
  DROP TYPE "public"."enum_contact_forms_industry";
  DROP TYPE "public"."enum_contact_forms_business_size";
  DROP TYPE "public"."enum_contact_forms_has_website";
  DROP TYPE "public"."enum_contact_forms_timeline";
  DROP TYPE "public"."enum_contact_forms_budget";
  DROP TYPE "public"."enum_contact_forms_how_did_you_hear";
  DROP TYPE "public"."enum_contact_forms_status";
  DROP TYPE "public"."enum_impressum_status";
  DROP TYPE "public"."enum__impressum_v_version_status";
  DROP TYPE "public"."enum_datenschutz_status";
  DROP TYPE "public"."enum__datenschutz_v_version_status";
  DROP TYPE "public"."enum_faq_status";
  DROP TYPE "public"."enum__faq_v_version_status";`)
}
