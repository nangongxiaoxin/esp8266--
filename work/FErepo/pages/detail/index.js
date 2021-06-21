import request from '../../util/requst';
import moment from 'moment';
Page({
  data: {
    id: '',
    title: "这是一个抽奖标题",
    canIUseShareButton: true,
    selectData: ['否（不限制单用户中奖次数）', '是（每用户只能中奖一次）'],
  },
  onLoad(query) {
    let option = my.getLaunchOptionsSync();
    if (option.query.id) {
      this.setData({
        id: option.query.id
      })
    } else {
      this.setData({
        id: query.id
      })
    }
    // console.log('query', query)
    
    my.setNavigationBar('抽奖详情')
    this.onInvite();
    // 页面加载
    // console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    request({
      url: `api/lottery?lotteryId=${query.id}`,
      type: 'get',
    }).then(res => {
      if (res.status !== 200) return my.showToast({
        type: 'fail',
        content: res.message,
        delay: 5000
      });
      let lottery = res.data.lottery[0];
      lottery.end_time = moment(lottery.end_time).format('YYYY-MM-DD HH:mm')
      lottery.start_time = moment(lottery.start_time).format('YYYY-MM-DD HH:mm')
      this.setData({
        lottery: lottery,
        prizes: res.data.prizes
      })
    })
  },
  // 跳转至编辑页面
  toForm(event) {
    my.navigateTo({
      url: '/pages/form/index?id=' + event.target.dataset.id
    })
  },
  // 跳转至结果页面
  toResult(event) {
    my.navigateTo({
      url: '/pages/result/index?id=' + event.target.dataset.id
    })
  },
  // 邀请抽奖用户
  onInvite(event) {
    this.setData({ canIUseShareButton: my.canIUse('button.open-type.share') }) 
    
    // my.showSharePanel();
  },
  onShareAppMessage() { 
    return {
      title: '抽奖',
      desc: '', 
      path: `pages/luckDraw/index?id=${this.data.id}`,
      imageUrl: 'https://img.alicdn.com/imgextra/i2/O1CN01NqnRfz1mFhHzTK8Ih_!!6000000004925-2-tps-295-164.png',
      success: function (res) {
        console.log('-------------', res)
      },
      fail: function (fail) {
        console.log('------------- fail', fail)
      },
    }
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
    request({
      url: `api/lottery?lotteryId=${this.data.id}`,
      type: 'get',
    }).then(res => {
      if (res.status !== 200) return my.showToast({
        type: 'fail',
        content: res.message,
        delay: 5000
      });
      let lottery = res.data.lottery[0];
      lottery.end_time = moment(lottery.end_time).format('YYYY-MM-DD HH:mm')
      lottery.start_time = moment(lottery.start_time).format('YYYY-MM-DD HH:mm')
      this.setData({
        lottery: lottery,
        prizes: res.data.prizes
      })
    })
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
  }
});
