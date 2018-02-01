Component({
  properties: {
    sortId: {
      type: Number,
      value: 1
    }
  },

  data: {
    menuList: [],
    prodData: []
  }, 
  
  ready: function() {
    this.setData({
      menuList: this.getMenuData(this.properties.sortId),
      prodData: this.getProducts(this.properties.sortId)
    })
  },

  methods: {
    getMenuData: function(sortId) {
      console.log(sortId)
      return [
        {
          imgUrl: '/pages/index/other/img/1.jpg',
          name: '男装'
        },
        {
          imgUrl: '/pages/index/other/img/1.jpg',
          name: '男裤'
        },
        {
          imgUrl: '/pages/index/other/img/1.jpg',
          name: '休闲裤'
        },
        {
          imgUrl: '/pages/index/other/img/1.jpg',
          name: '内衣裤袜'
        },
        {
          imgUrl: '/pages/index/other/img/1.jpg',
          name: '套装'
        },
        {
          imgUrl: '/pages/index/other/img/1.jpg',
          name: '卫衣'
        },
        {
          imgUrl: '/pages/index/other/img/1.jpg',
          name: '羽绒服'
        }
      ]
    },

    getProducts: function(sortId) {
      console.log(sortId)
      return [
        {
          imgUrl: '/pages/index/home/img/03.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 79,
          saledNum: 3058,
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: '/pages/index/home/img/03.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 79,
          saledNum: 3058,
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: '/pages/index/home/img/03.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 79,
          saledNum: 3058,
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: '/pages/index/home/img/03.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 79,
          saledNum: 3058,
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: '/pages/index/home/img/03.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 79,
          saledNum: 3058,
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: '/pages/index/home/img/03.jpg',
          description: '【限时亏本 春节请客必备 下单就送2个漱口杯】10支/20支软毛牙刷/竹炭软毛承认儿童牙刷 多款可选',
          price: 79,
          saledNum: 3058,
          linkUrl: '/pages/test/test'
        }
      ]
    }
  }
})