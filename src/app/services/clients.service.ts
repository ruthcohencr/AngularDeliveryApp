import { Injectable } from "@angular/core";
import { CLIENTS } from '../models/mock-clients'
import { Client } from "../models/client.model";

@Injectable()
export class ClientService {
    
    clientsArray : Client[];

    constructor(){
        this.clientsArray = CLIENTS;
    }

    getClients(): Client[]{
        return this.clientsArray;
    }
}