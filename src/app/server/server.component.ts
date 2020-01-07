import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverID: number = 182;
  serverStatus: string = 'Online';

  constructor() { }

  getServerStatus(){
    return this.serverStatus;
  }

  ngOnInit() {
  }

}
