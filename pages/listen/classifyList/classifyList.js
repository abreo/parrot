//获取应用实例
const APP = getApp()
import Utils from '../../../utils/util.js'
import Require from '../../../utils/require.js'

Page({
	data: {

	},
	onLoad: function (options) {

	},
	//打开听故事详情页
	handleOpenDetails() {
		wx.navigateTo({
			url: '/pages/listen/details/details',
		})
	}




})