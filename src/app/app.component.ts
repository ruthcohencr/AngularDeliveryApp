import { Component } from '@angular/core';
import { Client } from './models/client.model';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' my Delivery App';
  selectedClient: Client;

  constructor(private sharedService: SharedService) {
    sharedService.changeEmitted$.subscribe(
      client => this.updateSelectedClient(client));
  }

  updateSelectedClient(client: Client): void {
    console.log("from appComponent ..." + client.client.name);
    this.selectedClient = client;
  }

  onSelectedClientClicked(client: Client): void {
    console.log("from app component got client " + client.client.name);
    this.selectedClient = client;
  }
}
