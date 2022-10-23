import { funcCommand, shellCommand } from "./types";
import floraCommands from "./flora";
import funcCommands from "./func";
const commands: (shellCommand | funcCommand)[] = [
	...floraCommands,
	...funcCommands
];
export default commands;
