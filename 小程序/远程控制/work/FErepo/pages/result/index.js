import request from '../../util/requst.js';
import moment from 'moment';
Page({
  data: {
    records: [],
    lotteryCount: null,
    userCount: null,
    winnignCount: null,
    winningUserCount: null
  },
  changeTabKey(event) {
    this.setData({
      tabkey: event.target.dataset.key
    })
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    request({
      url: `api/user/getLotteryResult?lotteryId=${query.id}`,
      type: 'get',
    }).then(res => {
      for (let i = 0; i < res.data.records.length; i++) {
        res.data.records[i].time = moment(res.data.records[i].time).format('YYYY-MM-DD HH:mm')
      }
      this.setData({
        ...res.data
      })
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
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
    };
  },
});
