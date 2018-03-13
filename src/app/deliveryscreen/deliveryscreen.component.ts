import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Client } from '../models/client.model';
import { ClientDetilsComponent } from '../client-detils/client-detils.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-deliveryscreen',
  templateUrl: './deliveryscreen.component.html',
  styleUrls: ['./deliveryscreen.component.css']
})
export class DeliveryscreenComponent implements OnInit {

  currentClient : Client;

  constructor(private sharedService: SharedService) {
    //this.currentClient = new Client();
    sharedService.changeEmitted$.subscribe(
      client => {this.selectedClientClicked(client);});
  }

  selectedClientClicked(client: Client) {

    console.log("from deliveryScreen " + client.client.name);
    this.currentClient = client;
    //debugger;
    //console.log("from delivery - subscribe method " + this.currentClient.id);
  }

  getClient() : Client{
    return this.currentClient;
  }
  ngOnInit() {
  }

}
