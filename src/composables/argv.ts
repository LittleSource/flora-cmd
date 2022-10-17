import { execKey } from "./exec";

export const execArg = () => {
	if (hasArg()) {
		const cmdKey = process.argv[2];
		execKey(cmdKey);
	}
};

// 启动命令时有参数传递 返回true
export const hasArg = (): boolean => {
	return process.argv.length > 2;
};
