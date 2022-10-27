import fs from "fs"
import { cacheObject } from './types'
const filePath = "./data.json"

class fileCache extends cacheObject {
    initCache() {
        try {
            //TODO 查询文件是否存在
            var data = fs.readFileSync(filePath);
        } catch (e) {
            console.error("");
        }
    }
    getCache(key: string): string {
        try {
            var data = fs.readFileSync(filePath);
            const obj = JSON.parse(data.toString())
            return obj[key]
        } catch (e) {
            console.error("");
            return ""
        }
    }
    setCache(key, value: string) {
        try {
            var data = fs.readFileSync(filePath);
            const obj = JSON.parse(data.toString())
            obj[key] = value
            fs.writeFile(filePath, JSON.stringify(obj), function (err) {
                // 如果err为true，则文件写入失败，并返回失败信息
                if (err) {
                    return console.log('文件写入失败！' + err.message)
                }
                // 若文件写入成功，将显示“文件写入成功”
                console.log('文件写入成功！')
            })
        } catch (e) {
            console.error(e);
            return ""
        }
    }
}

export default fileCache
