import request from '../../util/requst.js';
import {transString} from '../../util/dataParse.js';
Page({
  data: {
    tab: ['我参与的抽奖', '我发起的抽奖'],
    tabkey: 0,
    list: []
  },
  // 切换tab
  changeTabKey(event) {
    this.setData({
      tabkey: event.target.dataset.key
    }, (res) => {
      this.getData();
    })
  },
  // 跳转至新增页面
  toForm(event) {
    my.navigateTo({
      url: event.target.dataset.id ? '/pages/form/index?id=' + event.target.dataset.id : '/pages/form/index'
    })
  },
  // 跳转至详情页面
  toDetail(event) {
    // 如果是我参与的抽奖，退出
    if (!this.data.tabkey) return;
    my.navigateTo({
      url: '/pages/detail/index?id=' + event.target.dataset.id
    })
  },
  getData() {
    this.setData({
      list: []
    })
    request({
      url: !this.data.tabkey ? 'api/user/joinLottery' : 'api/user/ownLottery',
      type: 'get',
    }).then(res => {
      for (var i = 0; i < res.data.list.length; ++i) {
        res.data.list[i].time = transString(res.data.list[i].winTime || res.data.list[i].start_time)
      }
      let data = {
        isWinnig: 0,
        prizes: [],
        title: "前端添加测试数据",
        time: "2021/03/09 02:03",
      }
      this.setData({
        list: [...res.data.list] || []
      })
    })
  },
  onLoad(query) {
    console.log('shonLoadow query', query)
    console.log('transString', transString())
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow(query) {
    // 页面显示
    this.getData();
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '抽奖',
      desc: '',
      path: 'pages/index/index',
      imageUrl: 'https://img.alicdn.com/imgextra/i2/O1CN01NqnRfz1mFhHzTK8Ih_!!6000000004925-2-tps-295-164.png',
      // bgImgUrl: 'https://img.alicdn.com/imgextra/i2/O1CN01NqnRfz1mFhHzTK8Ih_!!6000000004925-2-tps-295-164.png',
    };
  },
});
