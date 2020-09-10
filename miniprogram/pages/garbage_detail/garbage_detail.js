// miniprogram/pages/garbage_detail/garbage_detail.js
const GARBAGE_TYPE = require('../../enum/garbage_type.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    type: null,
    current_garbage_type: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { type, name } = options
    let current_garbage_type = GARBAGE_TYPE.filter(function(item){
      return item.type == type
    })[0]
    this.setData({
      name, type, current_garbage_type
    })
    wx.setNavigationBarTitle({
      title: `${name}-${current_garbage_type.title}`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let { type, name, current_garbage_type } = this.data
    return {
      title: `${name}-${current_garbage_type.title}`
    }
  }
})