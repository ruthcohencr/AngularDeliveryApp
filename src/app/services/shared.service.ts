import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Client } from '../models/client.model';

@Injectable()
export class SharedService {
    // Observable string sources
    private emitChangeSource = new Subject<Client>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // Service message commands
    emitChange(change: Client) {
        this.emitChangeSource.next(change);
    }
}