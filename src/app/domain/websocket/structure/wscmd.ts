export class WSCmd {
  name: string;
  ticket: string;
  guid: string;
  body: any;
  public static ticket: string = "noValue";

  public static setTicket(ticket: string){
    WSCmd.ticket = ticket;
  }

  constructor(data: any, body: any = null){
    try{
      let parse: WSCmd = JSON.parse(data);
      this.name = parse.name;
      this.ticket = parse.ticket;
      this.guid = parse.guid;
      this.body = parse.body;
    }
    catch{
      this.name = data != null ? data.toString() : "noValue";
      this.ticket = WSCmd.ticket;
      this.body = body != null ? body : "noValue";
    }
  }
  toJson():string{
    return JSON.stringify(this);
  }


}
