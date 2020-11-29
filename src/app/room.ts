export class Room {
	private created: Date;

    constructor(
    private roomcreator: String,
	private member:  String,
	private Roomid: Number,
  ) {
    this.created = new Date();
  }
}

interface roomJSON {
  roomcreator:    String;
  member:    String;
  Roomid: Number;
  created: Date;
}