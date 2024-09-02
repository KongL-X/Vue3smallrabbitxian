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
