// miniprogram/pages/front_page/front_page.js
const {format_garbage_type} = require('../../model/front_page.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    loading: false,
    tabClo:[
      {title: '湿垃圾', type: 0},
      { title: '干垃圾', type: 1 },
      { title: '可回收', type: 2 },
      { title: '有害垃圾', type: 3 }
    ],
    dataset: null,
    format_garbage_type: format_garbage_type
  },
  tabSelect(e) {
    let {type, id} = e.currentTarget.dataset
    if( type === this.data.TabCur)
      return false
    this.setData({
      TabCur: type
    })
    this.loadGarbageList(type, id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadGarbageList(0)
  },
  loadGarbageList: function (type, TabCur){
    this.setData({ loading: true})
    wx.cloud.callFunction({
      name: 'loadGarbageList',
      data: {
        type: type
      }
    }).then(res => {
      this.setData({ loading: false, dataset: res.result.data, TabCur: TabCur||0})
    }).catch(er =>{
      this.setData({ loading: false, dataset: null })
      wx.showToast({
        icon: 'none',
        title: '请求错误，请重新切换',
        duration: 2000
      })
    })
  },
  handleToSearch: function(e){
    wx.navigateTo({
      url: '/pages/search/search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})