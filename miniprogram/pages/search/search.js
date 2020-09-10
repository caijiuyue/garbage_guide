// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    dataset: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  handleSearch: function(e){
    let {value} = e.detail
    if(!value){
      wx.showToast({
        icon:'none',
        title: '请填写有效的值',
        duration: 2000
      })
      return
    }
    this.loadSearchGarbage(value)
  },
  loadSearchGarbage: function (searchTxt) {
    this.setData({ loading: true })
    wx.cloud.callFunction({
      name: 'searchGarbage',
      data: {
        search: searchTxt
      }
    }).then(res => {
      this.setData({ loading: false, dataset: res.result.data})
    }).catch(er =>{
      this.setData({ loading: false, dataset: null })
      wx.showToast({
        icon: 'none',
        title: '请求错误，请重新搜索',
        duration: 2000
      })
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

  }
})