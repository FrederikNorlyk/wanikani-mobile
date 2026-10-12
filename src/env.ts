import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	CONTACT_EMAIL: { static: true },
	CRON_SECRET: { static: true },
	DATABASE_URL: { static: true },
	PRIVATE_VAPID: { static: true },
	PUBLIC_VAPID: { public: true, static: true }
});
