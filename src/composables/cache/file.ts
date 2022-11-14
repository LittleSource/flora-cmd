import fs from 'fs'
import { cacheObject } from './types'
const filePath = './data.json'
class fileCache extends cacheObject {
  exeitFile(): boolean {
    try {
      fs.accessSync(filePath, fs.constants.F_OK)
      return true
    }
    catch (err) {
      return false
    }
  }

  async initCache() {
    return new Promise<void>((resolve, reject) => {
      if (this.exeitFile()) { resolve() }
      else {
        try {
          fs.writeFileSync(filePath, '{}')
          resolve()
        }
        catch (err) {
          console.log('创建文件失败', err)
          reject(err)
        }
      }
    })
  }

  getCache(key: string): string {
    try {
      const data = fs.readFileSync(filePath)
      const obj = JSON.parse(data.toString())
      return obj[key] ?? ''
    }
    catch (e) {
      console.error('')
      return ''
    }
  }

  setCache(key, value: string) {
    try {
      const data = fs.readFileSync(filePath)
      console.log('data!!!!', data.toString())
      const obj = JSON.parse(data.toString())
      obj[key] = value
      fs.writeFileSync(filePath, JSON.stringify(obj))
    }
    catch (e) {
      console.error(`${key}  ${value} 文件写入失败!  ${e}`)
    }
  }
}

export default fileCache
