import sendHTTPRequest from '#lib/util/httpUtil.js';
import { query } from '$app/server';
import * as v from 'valibot';

const schema = v.pipe(
	v.object({
		assignmentId: v.pipe(
			v.number(),
			v.integer('assignmentId must be an integer'),
			v.minValue(1, 'assignmentId must be set')
		),
		incorrectMeaningAnswers: v.pipe(
			v.number(),
			v.integer('incorrectMeaningAnswers must be an integer'),
			v.minValue(0, 'incorrectMeaningAnswers must be zero or a positive number')
		),
		incorrectReadingAnswers: v.pipe(
			v.number(),
			v.integer('incorrectReadingAnswers must be an integer'),
			v.minValue(0, 'incorrectReadingAnswers must be zero or a positive number')
		)
	}),
	v.transform(
		({ assignmentId, incorrectMeaningAnswers, incorrectReadingAnswers }) => ({
			review: {
				assignment_id: assignmentId,
				incorrect_meaning_answers: incorrectMeaningAnswers,
				incorrect_reading_answers: incorrectReadingAnswers,
				created_at: new Date().toISOString().replace('Z', '000Z')
			}
		})
	)
);

export const createReview = query(schema, async (body) => {
	await sendHTTPRequest('https://api.wanikani.com/v2/reviews/', {
		method: 'POST',
		body: body
	});
});
