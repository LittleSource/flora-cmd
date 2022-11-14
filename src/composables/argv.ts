import { execKey } from './exec'

// 第几个是真实的arg
// 开发环境3 和 打包2 不一致
export const realArgIndex = 3

export const hasArg = (): boolean => {
  return process.argv.length > 2
}

export const initArg = (): boolean => {
  if (hasArg()) {
    execKey(process.argv[3])
    return true
  }
  return false
}
