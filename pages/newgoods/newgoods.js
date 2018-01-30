let Timer

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false,
    trynewWrapperWidth: '',
    trynewItemWidth: '',
    collectItemHeight: '',
    limitedData: [],
    collections: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this
    let limitedData = [
      {
        id: '1',
        src: "./img/01.jpg",
        description: "产品信息描述产品信息描述产品信息描述",
        price: "10.00"
      },
      {
        id: '2',
        src: "./img/01.jpg",
        description: "产品信息描述产品信息描述产品信息描述",
        price: "10.00"
      },
      {
        id: '3',
        src: "./img/01.jpg",
        description: "产品信息描述产品信息描述产品信息描述",
        price: "10.00"
      },
      {
        id: '4',
        src: "./img/01.jpg",
        description: "产品信息描述产品信息描述产品信息描述",
        price: "10.00"
      },
      {
        id: '5',
        src: "./img/01.jpg",
        description: "产品信息描述产品信息描述产品信息描述",
        price: "10.00"
      },
      {
        id: '6',
        src: "./img/01.jpg",
        description: "产品信息描述产品信息描述产品信息描述",
        price: "10.00"
      }
    ]
    let collections = [
      {
        id: '1',
        src: "./img/03.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: "./img/avatar.jpg",
        customer2: "./img/avatar2.jpg"
      },
      {
        id: '1',
        src: "./img/03.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: './img/avatar.jpg',
        customer2: "./img/avatar2.jpg"
      },
      {
        id: '1',
        src: "./img/03.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: './img/avatar.jpg',
        customer2: "./img/avatar2.jpg"
      },
      {
        id: '1',
        src: "./img/03.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: './img/avatar.jpg',
        customer2: "./img/avatar2.jpg"
      },
      {
        id: '1',
        src: "./img/03.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: './img/avatar.jpg',
        customer2: "./img/avatar2.jpg"
      },
      {
        id: '1',
        src: "./img/03.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: './img/avatar.jpg',
        customer2: "./img/avatar2.jpg"
      },
      {
        id: '1',
        src: "./img/03.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: './img/avatar.jpg',
        customer2: "./img/avatar2.jpg"
      },
      {
        id: '1',
        src: "./img/03.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: './img/avatar.jpg',
        customer2: "./img/avatar2.jpg"
      }
    ]

    this.setData({
      limitedData: limitedData,
      collections: collections
    })

    wx.getSystemInfo({
      success: function (res) {
        page.setData({
          trynewWrapperWidth: res.windowWidth * 0.3 * page.data.limitedData.length + 'px',
          trynewItemWidth: res.windowWidth * 0.3 + 'px',
          collectItemHeight: res.windowWidth * 0.493 + 'px'
        })
      }
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
    clearTimeout(Timer)
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
    const newData = [
      {
        id: '11',
        src: "./img/02.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: "./img/avatar.jpg",
        customer2: "./img/avatar2.jpg"
      },
      {
        id: '12',
        src: "./img/02.jpg",
        description: "Allin2018春季新款连帽韩版宽松套头chic潮流学生外套bf卫衣男",
        price: "10.00",
        customer1: "./img/avatar.jpg",
        customer2: "./img/avatar2.jpg"
      }
    ]
    if (!this.data.isLoading) {
      this.setData({ isLoading: true }, () => {
        Timer = setTimeout(() => {
          this.setData({
            collections: this.data.collections.concat(newData)
          }, () => {
            this.setData({ isLoading: false })
          })
        }, 2000)
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})