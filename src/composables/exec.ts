import commands from "./commands";
import { spawn, exec } from "child_process";
import { useLogInfo } from "./log/useInfo";
import { shellCommand, funcCommand } from "./commands/types";
const { add } = useLogInfo();
export const execKey = (cmdKey: string) => {
	const command = commands.find((element) => element.key === cmdKey);
	if (!!command) {
		if (command.type === "func") {
			command.func ? command.func() : ""//打出errlog
			return
		}
		let task = spawn((command as shellCommand).cmd);
		task.stdout.on("data", (data) => {
			add(data);
			console.log(`${data}`);
		});
		task.stderr.on("data", (data) => {
			console.log(`${data}`);
			exit();
		});
	} else {
		//打开未找到命令的提示
		console.log("===========");
		add("not fond command!");
		exit();
	}
};

export const exit = () => setTimeout(() => process.exit(0), 500);

const openUrl = (url: string) => {
	if (process.platform && process.platform === "win32") {
		exec(`start ${url}`);
	} else {
		// TODO 未测试linux系统
		exec(`open ${url}`);
	}
};
