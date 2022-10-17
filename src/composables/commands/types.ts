export type FloraCommand = {
	key: string;
	cmd: string;
	desc: string;
	type?: "shell" | "func";
	//TODO func?: function():any 支持函数
};
