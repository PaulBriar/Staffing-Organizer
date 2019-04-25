import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff: Staff[];
  selectedStaff: Staff;

  constructor(private staffService: StaffService) { }

  getStaff(): void {
    this.staffService.getStaff()
      .subscribe(staff => this.staff = staff);
  }

  ngOnInit() {
    this.getStaff();
  }

  onSelect(member: Staff): void {
    this.selectedStaff = member;
  }


}
