// 检测PATH中是否设置$HOME/a2/src/eng/flora/scripts
export const hasFloraScriptsEnv = (): boolean => {
  if (typeof process.env.PATH === 'undefined')
    throw new Error('env PATH is undefined')

  return process.env.PATH.includes('a2/src/eng/flora/scripts')
}

export const setFloraScriptsEnv = () => {
  if (typeof process.env.HOME === 'undefined')
    throw new Error('env HOME is undefined')

  process.env.PATH = `${process.env.HOME}/a2/src/eng/flora/scripts:${process.env.PATH}`
}
