import cache from '../cache'
import type { productType } from './types'
import defaultProduct from './default'

export const getProductList = (): productType[] => {
  const productStr = cache.getCache('product')
  if (!productStr)
    return []
  return JSON.parse(productStr)
}

export const setProduct = (product: productType) => {
  let productsList: productType[] = []
  const productsStr = cache.getCache('product')

  if (productsStr.length > 0)
    productsList = JSON.parse(productsStr)

  productsList.push(product)
  cache.setCache('product', JSON.stringify(productsList))
}

export const initProduct = async () => {
  return new Promise<void>((resolve, reject) => {
    cache.initCache().then(() => {
      if (getProductList().length === 0)
        defaultProduct.forEach(item => setProduct(item))
      resolve()
    }).catch((err) => {
      reject(err)
    })
  })
}
