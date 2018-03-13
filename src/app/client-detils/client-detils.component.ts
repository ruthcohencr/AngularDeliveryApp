import { Component, OnInit, Input, NgModule, OnChanges } from '@angular/core';
import { Client } from '../models/client.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-client-detils',
  templateUrl: './client-detils.component.html',
  styleUrls: ['./client-detils.component.css'],
  // inputs: ['currentClient']
})
export class ClientDetilsComponent implements OnInit {

  constructor() {
    //this.currentClient = new Client();
    console.log("from client details - constructor " + this.currentClient);
  }

  @Input() currentClient: Client;

  ngOnChanges(changes: any) {

    ///console.log("from change "+ changes);
    console.log("from change " + changes.currentClient.client);
    //debugger;
    let client = changes.currentClient;
    if (client != undefined && client != null) {
     // this.currentClient = client;
    }
    // else {
    //   this.currentClient = new Client();
    //   this.currentClient.client.name = "temp name";
    //   this.currentClient.humanId = "99";
    //   this.currentClient.address.city = "some city";
    //   this.currentClient.address.street = "street";
    //   this.currentClient.address.number = "99";
    // }
  }
    ngOnInit() {


    }
  }
