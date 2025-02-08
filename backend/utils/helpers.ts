import { ZodError } from "zod";

export function extractZodErrorMessages(error: ZodError) {
	let errors: string[] = [];
	error.errors.map((error) => {
		errors.push(error.message);
	});
	return errors;
}
