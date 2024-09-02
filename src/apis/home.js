import httpInstance from '@/utils/http'
//h获取banner
export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

export const getNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}
export const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}
//获取所有商品模块
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
