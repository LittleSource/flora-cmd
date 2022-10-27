import { funcCommand } from "../types";
import { exec } from "child_process";
const funcCommands: funcCommand[] = [
    {
        key: "doc",
        desc: "打开flora文档website",
        type: "func",
        func: () => {
            const url = "https://flora-doc.applysquare.net"
            if (process.platform && process.platform === "win32") {
                exec(`start ${url}`);
            } else {
                // TODO 未测试linux系统
                exec(`open ${url}`);
            }
        },
    },
    {
        key: "go",
        desc: "前往项目x路径 eg: f go 1",
        type: "func",
        func: () => {

        },
    },
    {
        key: "set",
        desc: "设置项目路径 eg: f set 1 path",
        type: "func",
        func: () => {

        },
    },
    {
        key: "list",
        desc: "列出项目",
        type: "func",
        func: () => {

        },
    },
]

export default funcCommands