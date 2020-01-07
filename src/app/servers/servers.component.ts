import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = true;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = false;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }

}
