import commands from "./commands";
import childProcess from "child_process";

export const execKey = (cmdKey: string) => {
	const command = commands.find((element) => element.key === cmdKey);
	if (!!command) {
		if (command.key === "q") {
			process.exit(0);
		}
		childProcess.exec(command.cmd, (err, stdout) => {
			console.log(err);
			console.log(stdout);
		});
	} else {
		//打开未找到命令的提示
	}
};
