import { execKey } from './exec'

export const hasArg = (): boolean => {
  return process.argv.length > 2
}

export const initArg = (): boolean => {
  if (hasArg()) {
    execKey(process.argv[2])
    return true
  }
  return false
}
