const app = getApp()

Page({
  data: {
    minValue: 99,
    maxValue: 999,
    rangeValues: [500, 999]
  },
  onLoad: function() {},
  onRangeChange: function(e) {
    this.setData({
      minValue: Math.round(e.detail.minValue),
      maxValue: Math.round(e.detail.maxValue)
    });
  },
  onTest: function() {
    this.setData({
      rangeValues: [300, 600]
    });
  }
})