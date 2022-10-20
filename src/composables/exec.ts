import commands from "./commands";
import { spawn, exec } from "child_process";
import { useLogInfo } from "./log/useInfo";
const { add } = useLogInfo();
export const execKey = (cmdKey: string) => {
	const command = commands.find((element) => element.key === cmdKey);
	if (!!command) {
		if (command.key === "q") {
			process.exit(0);
		}
		switch (command.key) {
			case "o": {
				openUrl("https://flora-doc.applysquare.net");
				exit();
			}
			case "q": {
				exit();
			}
			default: {
				let task = spawn(command.cmd);
				task.stdout.on("data", (data) => {
					add(data);
					console.log(`${data}`);
				});
				task.stderr.on("data", (data) => {
					console.log(`${data}`);
					exit();
				});
			}
		}
	} else {
		//打开未找到命令的提示
	}
};

export const exit = () => process.exit(0);

const openUrl = (url: string) => {
	if (process.platform && process.platform === "win32") {
		exec(`start ${url}`);
	} else {
		//linux系统未测试
		exec(`open ${url}`);
	}
};
