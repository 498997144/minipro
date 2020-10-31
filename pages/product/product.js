// pages/product/product.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    detailData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad({id}) {
    this.setData({id})
    // this.getProductDetail(id)
  },


  async getProductDetail(id){
    let {statusCode,data} = await app.get('')
    console.log(data);
    
    // if(statusCode === 200) this.setData({detailData:})
  },

  
})