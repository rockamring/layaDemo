/*
* name;
*/
class SceneManager{
    public static Instance:SceneManager;
    private sceneMap ={};
    private loadingScene:string;
    constructor(){
        this.sceneMap["Arena"] = "res/threeDimen/scene/Arena/Arena.ls";
        this.sceneMap["XunLongShi"] = "res/threeDimen/scene/TerrainScene/XunLongShi.ls";
        this.sceneMap["Example_01"] = "res/threeDimen/scene/particle/Example_01.ls";
        SceneManager.Instance = this;
    }

    public changeScene(sceneName:string):void{
        var scenepath = this.sceneMap[sceneName] ;
        if (scenepath == null){
            return;
        }

        this.loadingScene = scenepath;
        Laya.loader.create(scenepath, Laya.Handler.create(
            this, this.onLoadComplete), null, Laya.Scene);
    }
    private onLoadComplete():void{
        var scene:Laya.Scene = Laya.loader.getRes(this.loadingScene);
        if (null == scene){
            return;
        }
        Laya.stage.addChild(scene);

        var camera: Laya.Camera = (scene.addChild(new Laya.Camera(0, 0.1, 100))) as Laya.Camera;
        camera.transform.translate(new Laya.Vector3(0, 3, 3));
        camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
        camera.clearColor = null;

          // //添加方向光
        // var directionLight: Laya.DirectionLight = scene.addChild(new Laya.DirectionLight()) as Laya.DirectionLight;
        // directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        // directionLight.direction = new Laya.Vector3(1, -1, 0);
    }
}