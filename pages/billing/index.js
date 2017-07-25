// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: "000",
    hours : "00",
    minuts : "00",
    seconds : "00",
    actionText: "正在计费",
    clickBtn: false
  },
  endride: function () {
    clearInterval(this.timer);
    this.setData({
      actionText: "本次骑行时间",
      clickBtn: true
    });
  },
  movetoIndex: function () {
    if (this.data.clickBtn) {
      wx.redirectTo({
        url: '../index/index',
      })
    }else{
      wx.navigateTo({
        url: '../index/index?clickBtn=' + this.data.clickBtn,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      number: options.number
    })
    let h = 0;
    let m = 0;
    let s = 0;
    this.timer = setInterval(() => {
      if (s < 9) {
        this.setData({
          seconds: "0" + ++s
        })
      }else if (s == 19) {
        if (m < 9) {
          this.setData({
            seconds: "00",
            minuts: "0" + ++m
          })
        }else if (m == 19) {
          if (h < 9) {
            this.setData({
              seconds: "00",
              minuts: "00",
              hours: "0" + ++h
            })
          }else {
            this.setData({
              seconds: "00",
              minuts: "00",
              hours: ++h
            })
          }
          m = 0;
        }else{
          this.setData({
            seconds: "00",
            minuts: ++m
          })
        }
        s = 0;
      }else{
        this.setData({
          seconds: ++s
        })
      }
    }, 10)
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})