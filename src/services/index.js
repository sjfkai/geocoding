import { sleep, jsonpPromise } from '../utils'

function getFromStorage(key) {
  const cache = localStorage.getItem(key)
  if (!cache) {
    return null
  }
  return JSON.parse(cache)
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // 缓存已满
    clearStorage()
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function clearStorage(count = 10) {
  for(let i = 0; i < count; i++) {
    localStorage.removeItem(localStorage.key(0))
  }
}

window.baiduApiKey = 'gQsCAgCrWsuN99ggSIjGn5nO' // TODO

export async function getBaiduLocation({ geoCode, coordtype }) {
  const cacheKey = `baidu_${coordtype}_${geoCode}`
  const cache = getFromStorage(cacheKey)
  if (cache) {
    return {...cache, coords: cache.coords || 'bd09'}
  }
  // 为了不超qps限制，手动增加间隔
  await sleep(500)
  const url = `https://api.map.baidu.com/reverse_geocoding/v3/?ak=${window.baiduApiKey}&output=json&coordtype=${coordtype}&location=${geoCode}&extensions_poi=1`

  const res = await jsonpPromise(url, {
    param: 'callback',
    prefix: 'showLocation',
  })

  console.log(res)

  if (res.status !== 0) {
    return {
      geoCode,
      isError: true,
      message: res.msg,
      status: res.status,
    }
  }

  const result = {
    geoCode,
    isError: false,
    formattedAddress: res.result.formatted_address,
    country: res.result.addressComponent.country,
    province: res.result.addressComponent.province,
    city: res.result.addressComponent.city,
    street: res.result.addressComponent.street,
    streetNumber: res.result.addressComponent.street_number,
    distance: res.result.addressComponent.distance,
    poi: (res.result.poiRegions[0] && res.result.poiRegions[0].name) || '',
    poiDistance: (res.result.poiRegions[0] && res.result.poiRegions[0].distance) || '',
    sematicDescription: res.result.sematic_description,
  }
  saveToStorage(cacheKey, result)
  return result
}