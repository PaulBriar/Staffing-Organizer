import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Staff } from './staff';
import { STAFFLIST } from './mock-staff';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class StaffService {
  getStaff(): Observable<Staff[]> {
    //TODO: send the message _after_ fetching the staff
    this.messageService.add('StaffService: fetched staff');
    return of(STAFFLIST);
  }

  constructor(private messageService: MessageService) { }
}
