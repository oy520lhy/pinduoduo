const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isAuthoried: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('进入user的onLoad函数')
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
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo'] && app.globalData.userInfo) {
          this.setData({
            userInfo: app.globalData.userInfo,
            isAuthoried: true
          })
        } else {
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
              this.setData({
                userInfo: res.userInfo,
                isAuthoried: true
              })
            },
            fail: res => {
              this.setData({
                userInfo: {},
                isAuthoried: false
              })
              wx.showModal({
                title: '提示',
                content: '必须要授权登录才能进行操作，是否重新授权登录',
                showCancel: true,
                cancelText: '否',
                cancelColor: '#999',
                confirmText: '是',
                confirmColor: '#e02e24',
                success: (res) => {
                  if (res.confirm) {
                    wx.openSetting({})
                  } else if (res.cancel) {
                    wx.switchTab({
                      url: '/pages/index/index',
                    })
                  }
                }
              })
            }
          })
        }
      }
    })
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
    
  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      isAuthoried: true
    })
  }
})