    var dataForWeixin = {
      appId: "",
      MsgImg: "../images/c14.png",//显示图片
      TLImg: "../images/c14.png",//显示图片
      url: "Christmas/6.html?stra=!u738B!u4F1F",//跳转地址
      title: "将我的思念和祝福送给您,颐养源祝大家圣诞快乐",//标题内容
      desc: "将我的思念和祝福送给您,颐养源祝大家圣诞快乐",//描述内容
      fakeid: "",
      callback: function () { }
    };
    (function () {
      var onBridgeReady = function () {
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
          WeixinJSBridge.invoke('sendAppMessage', {
            "appid": dataForWeixin.appId,
            "img_url": dataForWeixin.MsgImg,
            "img_width": "120",
            "img_height": "120",
            "link": dataForWeixin.url,
            "desc": dataForWeixin.desc,
            "title": dataForWeixin.title
          }, function (res) { (dataForWeixin.callback)(); });
        });
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
          (dataForWeixin.callback)();
          WeixinJSBridge.invoke('shareTimeline', {
            "img_url": dataForWeixin.TLImg,
            "img_width": "120",
            "img_height": "120",
            "link": dataForWeixin.url,
            "desc": dataForWeixin.desc,
            "title": dataForWeixin.title
          }, function (res) { });
        });
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
          WeixinJSBridge.invoke('shareWeibo', {
            "content": dataForWeixin.title,
            "url": dataForWeixin.url
          }, function (res) { (dataForWeixin.callback)(); });
        });
        WeixinJSBridge.on('menu:share:facebook', function (argv) {
          (dataForWeixin.callback)();
          WeixinJSBridge.invoke('shareFB', {
            "img_url": dataForWeixin.TLImg,
            "img_width": "120",
            "img_height": "120",
            "link": dataForWeixin.url,
            "desc": dataForWeixin.desc,
            "title": dataForWeixin.title
          }, function (res) { });
        });
      };
  
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    })();
