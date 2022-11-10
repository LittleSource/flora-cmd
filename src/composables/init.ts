import { initArg } from './argv'
import { exit } from './exec'
import { initProduct } from './gopath'
import { useError } from './log/useError'
const { addError } = useError()
export default function initApp() {
  initProduct().then(() => {
    initArg()
    exit()
  }).catch((err) => {
    addError(`init product catch fail ${err}`)
  })
}
