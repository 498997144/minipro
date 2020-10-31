//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerList: [],
    themeList: [],
    recentList:[],
  },

  // 页面加载时
  onLoad() {

    // 登陆成功保存token
    wx.login({
      timeout: 5000,
      success: async (res) => {
        const {  code } = res
        let { statusCode, data } = await app.post('token/user', { code })
        if (statusCode === 200) {
          wx.setStorageSync('toke', data.token)
        }

      },
    })


    
    this.getBanner()
    this.getTheme()
    this.getRecent()

  },

  // 跳转至产品祥情页
  goProductDetail(event){ 
    let {id} = event.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/product/product?id='+id,
    })
    
  },
   // 跳转至主题祥情页
  goThemeDetail(event){
    let {id,name} = event.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/theme/theme?id=${id}&name=${name}`,
    })
  },
 
  // 获取轮播图
  async getBanner() {
    let { statusCode, data } = await app.get('banner/1')
    if (statusCode === 200) this.setData({ bannerList: data.items })
  },

  // 获取主题
  async getTheme() {
    let { statusCode, data } = await app.get('theme?ids=1,2,3')
    if (statusCode === 200) this.setData({themeList: data})
  },

  // 获取最近新品
  async getRecent(){
    let {statusCode,data} = await app.get('product/recent')
    if (statusCode === 200) this.setData({recentList: data})
  }

})