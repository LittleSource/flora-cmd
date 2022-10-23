import commands from "./commands";
import { spawn } from "child_process";
import { useError } from "./log/useError";
import { shellCommand } from "./commands/types";
const { addError } = useError();
export const execKey = (cmdKey: string) => {
	const command = commands.find((element) => element.key === cmdKey);
	if (!!command) {
		if (command.type === "func") {
			command.func ? command.func() : addError("the execute function for this command is undefined")
			exit();
			return
		}
		const cmds = (command as shellCommand).cmd.split(" ")
		try {
			const task = spawn(cmds[0], cmds.filter((_, index) => index > 0), {
				detached: true,
				stdio: 'inherit'
			});
			task.unref();
		} catch (err) {
			addError(`command exec error!${err}`);
		}
	} else {
		addError(`not fond key：${cmdKey}`);
	}
	exit();
};

export const exit = (ms: number = 500) => setTimeout(() => process.exit(0), ms);