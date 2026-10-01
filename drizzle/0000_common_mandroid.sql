CREATE TABLE `leads` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`city` text NOT NULL,
	`modality` text NOT NULL,
	`answers` text NOT NULL,
	`created_at` text NOT NULL,
	`consent_version` text NOT NULL
);
