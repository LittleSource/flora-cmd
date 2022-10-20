import { execKey } from "./exec";

export const execArg = () => {
	if (hasArg()) {
		const cmdKey = process.argv[2];
		execKey(cmdKey);
	}
};

// 启动命令时是否有参数传递
export const hasArg = (): boolean => {
	return process.argv.length > 2;
};
