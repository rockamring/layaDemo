var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.loginBtn=null;
		    this.userName=null;
		    this.createBtn=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","height":400}},{"type":"Button","props":{"y":226,"x":92,"width":150,"var":"loginBtn","skin":"comp/button.png","sizeGrid":"4,4,4,4","label":"登入游戏","height":37}},{"type":"Button","props":{"y":4,"x":563,"skin":"comp/btn_close.png","name":"close"}},{"type":"TextInput","props":{"y":167,"x":159,"width":184,"var":"userName","skin":"comp/textinput.png","name":"input","height":35}},{"type":"Button","props":{"y":226,"x":271,"width":150,"var":"createBtn","skin":"comp/button.png","sizeGrid":"4,4,4,4","label":"创建角色","height":37}}]};
		return TestPageUI;
	})(View);