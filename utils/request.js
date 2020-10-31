
const baseUrl = 'http://z.cn/api/v1/'

export const get = function (url, data = {}, header, method = 'GET') {
  url = baseUrl + url
  let defaultHeader = {
    // 'content-type':'application/json',
    token: wx.getStorageSync('token')
  }
  header = Object.assign(defaultHeader, header)
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header,
      success: (response) => {
        resolve(response)
      },
      fail: (response) => {
        reject(response)
      }
    })
  })
}

export const post = function (url, data = {}, header, method = 'POST') {

  url = baseUrl + url
  let defaultHeader = {
    // 'content-type':'application/json',
    token: wx.getStorageSync('token')
  }
  header = Object.assign(defaultHeader, header)

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header,
      success: (response) => {
        resolve(response)
      },
      fail: (response) => {
        reject(response)
      }
    })
  })
}