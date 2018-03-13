import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientService } from '../services/clients.service';
import { Client } from '../models/client.model';
import { WeekService } from '../services/week.service';
import { Router } from '@angular/router';
import { ClientDetilsComponent } from '../client-detils/client-detils.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  selectedClient: Client;
  clientCollection: Client[];

  @Output()
  clientClicked: EventEmitter<Client> = new EventEmitter<Client>();

  constructor(private clientsService: ClientService,
    private weekService: WeekService,
    private sharedService: SharedService,
    private router: Router) {

    this.selectedClient = new Client();
    this.clientCollection = clientsService.getClients();
    this.weekService = weekService;
    this.router = router;
  }

  setClientFrom(client: Client): string {
    var currentDate = new Date(client.from);
    //  debugger;
    return currentDate.getHours() + ':' + '00';
  }
  setClientTo(client: Client): string {
    var currentDate = new Date(client.to);
    // debugger;
    return currentDate.getHours() + ':' + '00';
  }

  setEstimatedDate(client: Client): string {
    // debugger;
    var date = new Date(client.to);
    var returnDate = "";
    var dd = date.getDate();
    returnDate += dd.toString().length == 1 ? '0' + dd + '.' : dd + ".";
    var mm = date.getMonth() + 1;
    returnDate += mm.toString().length == 1 ? '0' + mm + '.' : mm + '.';
    returnDate += date.getFullYear();
    return returnDate;
  }

  setDayName(client): string {
    var result = this.weekService.getDay(new Date(client['to']).getDay());
    return result;
  }

  onCardClicked(client: Client): void {
    this.selectedClient = client;
  //  debugger;
    console.log("from mainScreen " + this.selectedClient.client.name);
    //////////////////////////////////////////////////////////
    //I dont user this emit function, instead I use shared service
    //this.clientClicked.emit(client);
    ////////////////////////////////////
    
    //send selected client to shared service
    //shared between appComponent to mainScreenComponent
    this.sharedService.emitChange(client);

    this.router.navigateByUrl('/delivery-screen');
  }

  ngOnInit() {
  }

}
