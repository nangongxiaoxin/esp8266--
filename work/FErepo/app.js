import request from './util/requst.js';

App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.log('my.getLaunchOptionsSync', my.canIUse('getLaunchOptionsSync'))
    // my.alert({
    //   title: 'App onLaunch' + JSON.stringify(options)
    // });
    console.log('my.SDKVersion ', my.SDKVersion)
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
