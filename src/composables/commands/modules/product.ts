// 有关项目跳转的命令
import type { funcCommand } from '../types'
import { getProductList } from '../../gopath'
const ProductCommands: funcCommand[] = [
  {
    key: 'cd',
    desc: '前往项目x路径 eg: f cd 1',
    type: 'func',
    func(args) {
      if (args.length < 1)
        return `arg error, ${this.desc}`
      // 解析第二个参数
      const productNum = parseInt(args[0])
      if (isNaN(productNum))
        return 'product num is not a number'
      // 获取项目列表
      const productList = getProductList()
      const product = productList.find(item => item.num === productNum)
      if (typeof product === 'undefined')
        return `product num ${productNum} not set path`
      // TODO让终端跳转目录
      return 'ok'
    },
  },
  {
    key: 'set',
    desc: '设置项目路径 eg: f set 1 path',
    type: 'func',
    func: () => {
      return 'ok'
    },
  },
  {
    key: 'list',
    desc: '列出项目',
    type: 'func',
    func: () => {
      return 'ok'
    },
  },
]

export default ProductCommands
