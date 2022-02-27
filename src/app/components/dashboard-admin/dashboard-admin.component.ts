import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  users: any;
  doctors: any;
  constructor(private doctorService: DoctorService,
    private router : Router) { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users") || "[]");
    this.doctorService.getAllDoctors().subscribe(
      (data) => {
        console.log('here data', data.allDoctors);
        this.doctors = data.allDoctors;
      }
    )
  }
  deleteUser(id) {
    //search ById
    let pos;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        pos = i;
      }

    }
    this.users.splice(pos, 1);
    localStorage.setItem("users", JSON.stringify(this.users));
  }
  getColor(role) {
    switch (role) {
      case 'client':
        return 'red'
        break;
      case 'chef':
        return 'green'
        break;
      case 'admin':
        return 'blue'
      default:
        break;
    }
  }
}
