import httpInstance from '@/utils/http'
//h获取banner
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
  })
}
