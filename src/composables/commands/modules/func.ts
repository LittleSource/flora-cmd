import { exec } from 'child_process'
import type { funcCommand } from '../types'
const funcCommands: funcCommand[] = [
  {
    key: 'doc',
    desc: '打开flora文档website',
    type: 'func',
    func: () => {
      const url = 'https://flora-doc.applysquare.net'
      if (process.platform && process.platform === 'win32') {
        exec(`start ${url}`)
      }
      else {
        // TODO 未测试linux系统
        exec(`open ${url}`)
      }
      return 'ok'
    },
  },
]

export default funcCommands
