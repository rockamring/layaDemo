module layaDemo{

import Event = Laya.Event;
import Socket = Laya.Socket;
import Byte = Laya.Byte;

class NetSocket
{
    private socket : Socket;
    private output : Byte;
    constructor()
    {

    }
    public connect(host:string, port:number):void
    {
        this.socket = new Socket();
        this.output = this.socket.output;

        this.socket.on(Event.OPEN, this, this.onSocketOpen);
        this.socket.on(Event.CLOSE, this, this.OnSocketClose);
        this.socket.on(Event.ERROR, this, this.OnSocketError);
        this.socket.on(Event.MESSAGE, this, this.OnMessageReceived);

        this.socket.connect(host, port);
    }
    private onSocketOpen():void
    {
        console.log("socket connected");
    }
    private OnSocketClose():void
    {
        console.log("socket closed");
    }
    private OnMessageReceived(message:any):void
    {
        console.log("socket msg");
    }
    private OnSocketError(e:Event):void
    {
        console.log("socket error");
    }
}
}