import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { STAFFLIST } from '../mock-staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff = STAFFLIST;
  selectedStaff: Staff;

  constructor() { }

  ngOnInit() {
  }

  onSelect(member: Staff): void {
    this.selectedStaff = member;
  }


}
