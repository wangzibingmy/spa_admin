var $login=(function(){
	var $loginDOM=
	var html=''+'<div id="admin-app">'
    	+'<div class="login">'
    	+	'<h1>集团后台登录</h1>'
    	+	'<label>用户名</label>'
    	+	'<input type="text"/>'
    	+	 '<br/>'
    	+	'<label>密&nbsp;&nbsp;&nbsp;&nbsp;码</label>'
    	+	'<input type="password"/> '
    	+	'<br/>'
    	+	'<label>验证码</label>'
    	+	'<input type="text"/> '
    	+	'<br/>'
    	+	'<input type="button" value="登&nbsp;录"/>'
    	+'</div>'
    +'</div>'
    var $form=$loginDom.find('form');
    $form.submit(function(e){
    	e.preventDefault();
    	if(validate()){

    	}
    	location
    })
	function show(config){
        //$(app.config.container).html('');
		$(app.config.container).html(html);
	}
	return {show:show};
})();