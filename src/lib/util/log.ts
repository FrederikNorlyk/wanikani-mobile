import * as Sentry from '@sentry/sveltekit';

export default class Log {
	public static error(error: unknown) {
		console.error(error);

		if (typeof error === 'string') {
			Sentry.captureMessage(error);
		} else {
			Sentry.captureException(error);
		}
	}
}
