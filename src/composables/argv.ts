import { execKey, exit } from "./exec";

export const execArg = (): boolean => {
	if (process.argv.length > 2) {
		execKey(process.argv[2])
		return true
	}
	exit()
	return false
};