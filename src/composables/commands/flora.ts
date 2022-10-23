import { shellCommand } from "./types";
const floraCommands: shellCommand[] = [
    {
        key: "g",
        cmd: "flora.sh generate",
        desc: "生成代码",
    },
    {
        key: "s",
        cmd: "flora.sh server",
        desc: "启动后端服务",
    },
    {
        key: "w",
        cmd: "flora.sh watch",
        desc: "开启watch进程",
    },
    {
        key: "u",
        cmd: "flora.sh updatedb",
        desc: "更新数据库",
    },
    {
        key: "uc",
        cmd: "flora.sh updatedb --create_db",
        desc: "创建并更新数据库",
    },
    {
        key: "up",
        cmd: "flora.sh upgrade",
        desc: "go.mod依赖关系的版本升级",
    },
    {
        key: "r",
        cmd: "flora.sh code release",
        desc: "版本发布",
    },
];
export default floraCommands;