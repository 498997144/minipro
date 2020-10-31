// pages/theme/theme.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id : '',
    name:'',
    productList:[],
    head_img:{},
    topic_img:{},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad ({id,name}) {
  
    this.data.id = id
    this.data.name = name

    this.getProductList(id)
    
  },


  onReady(){
    wx.setNavigationBarTitle({title:this.data.name})
  },


  // 跳转至产品祥情页
  goProductDetail(event){ 
    let {id} = event.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/product/product?id='+id,
    })
  },
  // 获取对应主题下的商品列表
  async getProductList(id){
    let {statusCode,data} = await app.get('theme/'+id)
    if(statusCode === 200)  this.setData({
      head_img:data.head_img,
      topic_img:data.topic_img,
      productList:data.products
    })  
  },
})