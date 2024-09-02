import httpInstance from '@/utils/http'
//h获取banner
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
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
