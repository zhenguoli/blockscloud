function icloud(appObject) {

	if(!appObject.attr('src')) {
		src = './home/article/lists?id=1';
	} else {
		src = appObject.attr('src');
	}

	// 打开对话框
	layer.open({
		type: 2 //此处以iframe举例
		,title: appObject.attr('title')
		,area: [appObject.attr('app-width')+'px', appObject.attr('app-height')+'px']
		,shade: 0
		,minButton: true
		,maxButton: true
		,taskbar:true
		,moveOut: true
		,content: src
		,zIndex: layer.zIndex //重点1
		,success: function(layero){
			layer.setTop(layero); //重点2
		}
	});

}