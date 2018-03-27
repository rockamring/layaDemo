var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;

// 创建TestPageUI的子类
function TestUI()
{
	var Event = laya.events.Event;
	TestUI.super(this);
	//btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
	this.loginBtn.on(Event.CLICK, this, onLoginClick);
	this.createBtn.on(Event.CLICK, this, onCreateClick);

	function onLoginClick()
	{
		var name = this.userName.textField.text;
		if (name == "")
			return;
		NetLogic.doLogin(name, "5");
	}
	
	function onCreateClick()
	{

	}
}
Laya.class(TestUI, "TestUI", TestPageUI);

//程序入口
Laya.init(600, 400);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad(){
	Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}

function onLoaded()
{	
	Laya.stage.addChild(new TestUI());
}

