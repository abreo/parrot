//获取应用实例
const APP = getApp()
import Utils from '../../../utils/util.js'
import Require from '../../../utils/require.js'

Page({
	data: {
		txt: '通知,是向特定受文对通知,是向特定受文对通知,是向特定受文对通知,是是向特定受文对通知,是'
	},
	onLoad: function (options) {
		console.log(this.data.txt.substring(0, 20))
	},
	//收集formId
	formSubmit(e) {
		Utils.getFormId(e); //获取formId	
	},








})




