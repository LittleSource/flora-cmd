import cache from '../cache'

interface productType {
    num: number// 项目编号
    path: string// 路径
}

export const getProductList = (): productType[] => {
    const products = cache.getCache("product")
    console.log(products)
    return []
}


export const setProduct = (product: productType) => {
    return []
}