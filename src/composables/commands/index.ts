import type { funcCommand, shellCommand } from './types'
import floraCommands from './modules/flora'
import funcCommands from './modules/func'
const commands: (shellCommand | funcCommand)[] = [
  ...floraCommands,
  ...funcCommands,
]
export default commands
