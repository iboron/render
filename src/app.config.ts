export default {
  pages: ["pages/hotel/index", "pages/user/index", "pages/order/index"],
  window: {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
  },
  "tabBar": {
    "color": "#1f1f1f",
    "selectedColor": "#1890ff",
    "backgroundColor": "#f5f5f5",
    "list": [
      {
        "pagePath": "pages/hotel/index",
        "iconPath": "./assets/tabbar/home.png",
        "selectedIconPath": "./assets/tabbar/home-choose.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/order/index",
        "iconPath": "./assets/tabbar/order.png",
        "selectedIconPath": "./assets/tabbar/order-choose.png",
        "text": "订单"
      },
      {
        "pagePath": "pages/user/index",
        "iconPath": "./assets/tabbar/user.png",
        "selectedIconPath": "./assets/tabbar/user-choose.png",
        "text": "我的"
      }
    ]
  }
};
