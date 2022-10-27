import { initArg } from './argv'
import cache from './cache'

export default function initApp() {
    initArg()
    cache.initCache()
    console.log(cache.setCache("pr", "dsdsd"))
}