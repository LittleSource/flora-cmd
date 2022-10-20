import { shellCommand } from "./types";
const commands: shellCommand[] = [
	{
		key: "g",
		cmd: "flora generate",
		desc: "生成代码",
	},
	{
		key: "s",
		cmd: "flora",
		desc: "启动后端服务",
	},
	{
		key: "w",
		cmd: "flora watch",
		desc: "开启watch进程",
	},
	//yarn dev
	{
		key: "u",
		cmd: "flora updatedb",
		desc: "更新数据库",
	},
	{
		key: "c",
		cmd: "flora updatedb --create_db",
		desc: "创建并更新数据库",
	},
	{
		key: "p",
		cmd: "flora upgrade",
		desc: "go.mod依赖关系的版本升级",
	},
	{
		key: "r",
		cmd: "flora code release",
		desc: "版本发布",
	},
	{
		key: "o",
		cmd: "-",
		desc: "打开flora文档website",
	},
	{
		key: "q",
		cmd: "-",
		desc: "退出",
	},
];
export default commands;
