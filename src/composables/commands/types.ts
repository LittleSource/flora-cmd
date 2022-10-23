export type baseCommand = {
	key: string;
	desc: string;
	type?: "shell" | "func";
};

export interface shellCommand extends baseCommand {
	type?: "shell";
	cmd: string;
}
interface commandFunc {
	(): void;
}
export interface funcCommand extends baseCommand {
	type?: "func";
	func?: commandFunc;
}
