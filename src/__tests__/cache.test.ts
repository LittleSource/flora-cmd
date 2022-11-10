import cache from '../composables/cache/index'

test('init cache', () => {
  return cache.initCache().then(() => {})
})
