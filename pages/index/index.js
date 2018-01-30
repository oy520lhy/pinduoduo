//index.js
Page({
  data: {
    windowWidth: 0,
    scrollLeft: 0,
    currentSortId: 0,
    productSorts: [],
  },
  onLoad: function () {
  },

  onReady: function () {
    let that = this

    this.setData({
      productSorts: this.getProductSorts()
    })

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth
        })
      }
    })
  },

  changeSortId: function (e) {
    if (e.target.id < 6) {
      this.setData({
        currentSortId: parseInt(e.target.id),
        scrollLeft: 0
      })
    } else {
      this.setData({
        currentSortId: parseInt(e.target.id),
        scrollLeft: (parseInt(e.target.id) - 4.5) * (this.data.windowWidth / 7)
      })
    }
  },

  getProductSorts: function () {
    return [
      {
        text: "首页",
        sortId: 0
      },
      {
        text: "男装",
        sortId: 1
      },
      {
        text: "年货",
        sortId: 2
      },
      {
        text: "手机",
        sortId: 3
      },
      {
        text: "鞋包",
        sortId: 4
      },
      {
        text: "电器",
        sortId: 5
      },
      {
        text: "服饰",
        sortId: 6
      },
      {
        text: "百货",
        sortId: 7
      },
      {
        text: "家纺",
        sortId: 8
      },
      {
        text: "母婴",
        sortId: 9
      },
      {
        text: "水果",
        sortId: 10
      },
      {
        text: "运动",
        sortId: 11
      }
    ]
  },
})
