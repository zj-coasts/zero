<template>
	<div @click="clickHandle" style="width:100%; height: 100%" @unload="unloadHandle">
		<router-view/>
	</div>
</template>

<script lang="ts" setup>
	// 性能信息收集
	console.log(window.performance.timing)
	console.log('FP(First Paint)白屏时间 --->', performance.getEntriesByType('paint'))
	console.table(performance.getEntriesByType('resource'))
	console.log('DNS查询', +window.performance.timing.domainLookupEnd - +window.performance.timing.domainLookupStart)
	console.log('TCP链接', +window.performance.timing.connectEnd - +window.performance.timing.connectStart)
	console.log('SSL建立', +window.performance.timing.connectEnd - +window.performance.timing.secureConnectionStart)
	console.log('首字节网络请求', +window.performance.timing.responseStart - +window.performance.timing.requestStart)
	console.log('内容传输', +window.performance.timing.responseEnd - +window.performance.timing.requestStart)
	console.log('DOM解析', +window.performance.timing.domInteractive - +window.performance.timing.responseEnd)
	console.log('首字节', +window.performance.timing.responseStart - +window.performance.timing.fetchStart)
	console.log('DOM Ready', +window.performance.timing.domContentLoadedEventEnd - +window.performance.timing.fetchStart)
	console.log('重定向时间', +window.performance.timing.redirectEnd - +window.performance.timing.redirectStart)
	console.log('dom渲染耗时', +window.performance.timing.domComplete - +window.performance.timing.domLoading)
	console.log('页面加载耗时', +window.performance.timing.loadEventEnd - +window.performance.timing.navigationStart)
	console.log('页面卸载耗时', +window.performance.timing.unloadEventEnd - +window.performance.timing.unloadEventStart)
	console.log('请求耗时', +window.performance.timing.responseEnd - +window.performance.timing.unloadEventStart)
	console.log('白屏时间', +window.performance.timing.domLoading - +window.performance.timing.navigationStart)
	
	window.addEventListener('error', (error) => {
		console.log('资源加载错误', error)
	}, true)
	
	window.onerror = (msg, url, row, col, error) => {
		console.log('js执行错误', msg, url, row, col, error)
	}
	
	/**
	 * 其中 data 参数是可选的，它的类型可以为 ArrayBufferView, Blob, DOMString 或者 FormData。
	 * 如果浏览器成功地将 beacon 请求加入到待发送的队列里，这个方法将会返回 true ，否则将会返回 false
	 * 使用Beacon时需要后台需要使用post方法接收参数，考虑到跨域问题，后台还需要改造接口配置CORS。
	 * 同时请求头必须满足CORS-safelisted request-header，其中content-type的类型必须为application/x-www-form-urlencoded, multipart/form-data, 或者text/plain。
	 */
	navigator.sendBeacon('', '异常信息') // 异常信息上报
	
	console.log('用户设备信息', navigator.userAgent)
	console.log('用户网络信息', navigator.connection)
	
	const clickHandle = (event: any) => {
		console.log('用户点击事件', event.target)
	}
	
	const unloadHandle = (event:any) => {
	}
	
	window.addEventListener('unload', event => {
		alert("浏览器关闭")
	})
	
	document.onvisibilitychange = (event:any) => {
		console.log('是否活跃', event)
	}
	
	window.navigator.geolocation.getCurrentPosition(position => {
		console.log('jingwei', position)
	})
</script>
