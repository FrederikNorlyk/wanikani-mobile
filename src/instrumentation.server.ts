import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: 'https://e1cbd3c4aa1f422c2375d9d8eb569ebe@o4512276133773312.ingest.de.sentry.io/4512276318912592',

	tracesSampleRate: 1.0
	// uncomment the line below to enable Spotlight (https://spotlightjs.com)
	// spotlight: import.meta.env.DEV,
});
