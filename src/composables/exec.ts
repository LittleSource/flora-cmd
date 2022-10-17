import commands from "./commands";
import { exec } from "child_process";

export const execKey = (cmdKey: string) => {
	const command = commands.find((element) => element.key === cmdKey);
	if (!!command) {
		if (command.key === "q") {
			process.exit(0);
		}
		switch (command.key) {
			case "o": {
				openUrl("https://flora-doc.applysquare.net");
				process.exit(0);
			}
			case "q": {
				process.exit(0);
			}
			default: {
				exec(command.cmd, (err, stdout) => {
					console.log(err);
					console.log(stdout);
				});
			}
		}
	} else {
		//打开未找到命令的提示
	}
};

const openUrl = (url: string) => {
	if (process.platform && process.platform === "win32") {
		exec(`start ${url}`);
	} else {
		//linux系统未测试
		exec(`open ${url}`);
	}
};
