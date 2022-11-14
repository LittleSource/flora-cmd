import { spawnSync } from 'child_process'
import commands from './commands'
import { useError } from './log/useError'
import type { shellCommand } from './commands/types'
import { realArgIndex } from './argv'
const { addError } = useError()

export const exit = (ms = 500) => setTimeout(() => process.exit(0), ms)

export const execKey = (cmdKey: string) => {
  const command = commands.find(element => element.key === cmdKey)
  if (typeof command === 'undefined') {
    addError(`not fond key: ${cmdKey}, please use f command to show key list`)
    return
  }
  if ('func' in command && command.func) {
    const res = command.func(process.argv.filter((_, index) => index > realArgIndex))
    if (res !== 'ok')
      addError(res)
    return
  }
  if ('cmd' in command) {
    const cmds = (command as shellCommand).cmd.split(' ')
    try {
      spawnSync(cmds[0], cmds.filter((_, index) => index > 0), {
        stdio: 'inherit',
      })
    }
    catch (err) {
      addError(`command exec error!${err}`)
    }
    return
  }
  addError('the execute function for this command is undefined')
}

