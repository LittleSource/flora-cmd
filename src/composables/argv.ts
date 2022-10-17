import { execKey } from "./exec";

export const execArg = () => {
	if (process.argv.length < 3) {
		return;
	}
	const cmdKey = process.argv[2];
	execKey(cmdKey);
};
