import type { funcCommand, shellCommand } from './types'
import floraCommands from './modules/flora'
import funcCommands from './modules/func'
import productCommands from './modules/product'
const commands: (shellCommand | funcCommand)[] = [
  ...floraCommands,
  ...funcCommands,
  ...productCommands,
]
export default commands
