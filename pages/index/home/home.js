Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    inner: {
      type: Object,
      value: {item: 'default Value'},
    }
  },
  data: {
    banners: [],
    activitiesWrapWidth: '0',
    activitiesItemWidth: '0',
    activities: [],
    indicatorLineWidth: '0',
    indicatorMarginLeft: '0',
    products: []
  },

  ready: function () {
    let that = this

    this.setData({
      banners: this.getBanners(),
      activities: this.getActivities(),
      products: this.getProducts()
    })

    wx.getSystemInfo({
      success: function (res) {
        const lineShowNum = 5
        let floatPercent = 10 / lineShowNum / 10
        that.setData({
          activitiesItemWidth: res.windowWidth * floatPercent + 'px',
          activitiesWrapWidth: res.windowWidth * floatPercent * (that.data.activities.length / 2) + 'px',
          indicatorLineWidth: lineShowNum / (that.data.activities.length / 2) * 100 + '%'
        })
      }
    })
  },

  methods: {
    // 这里是一个自定义方法
    customMethod: function () {
      console.log(this.data.someData.item)
      console.log(this.properties.inner)
    },

    bindscroll: function (e) {
      this.setData({
        indicatorMarginLeft: e.detail.scrollLeft / e.detail.scrollWidth * 100 + '%'
      })
    },

    getBanners: function () {
      return [
        {
          imgUrl: './img/banner1.jpg',
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: './img/banner2.jpg',
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: './img/banner3.jpg',
          linkUrl: '/pages/test/test'
        },
      ]
    },

    getActivities: function () {
      return [
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '限时秒杀'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '品牌清仓'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '食品超市'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '品质水果'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '爱逛街'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '家居优品'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '电器城'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '时尚穿搭'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '9块9特卖'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '名品折扣'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '一份抽奖'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '手机充值'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '分1亿红包'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '省钱妈咪'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '海淘'
        },
        {
          imgUrl: './img/collection.png',
          linkUrl: '/pages/test/test',
          name: '我的订单'
        }
      ]
    },

    getProducts: function() {
      return [
        {
          imgUrl: '/pages/index/home/img/prod.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 4,
          saledNum: 216,
          customer1: '/pages/index/home/img/avatar.jpg',
          customer2: '/pages/index/home/img/avatar2.jpg',
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: '/pages/index/home/img/prod.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 4,
          saledNum: 216,
          customer1: '/pages/index/home/img/avatar.jpg',
          customer2: '/pages/index/home/img/avatar2.jpg',
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: '/pages/index/home/img/prod.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 4,
          saledNum: 216,
          customer1: '/pages/index/home/img/avatar.jpg',
          customer2: '/pages/index/home/img/avatar2.jpg',
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: '/pages/index/home/img/prod.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 4,
          saledNum: 216,
          customer1: '/pages/index/home/img/avatar.jpg',
          customer2: '/pages/index/home/img/avatar2.jpg',
          linkUrl: '/pages/test/test'
        }
      ]
    } 
  }
})