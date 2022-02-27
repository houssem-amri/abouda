import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {

  doctors: any = [];

  constructor(
    private doctorService: DoctorService,
    private router: Router) { }

  ngOnInit() {
    this.getDoctors();
  }

  // deleteDoctor(id) {
  //   this.doctorService.deleteDoctor(id).subscribe(
  //     (data) => {
  //       console.log('Here data after delete', data.message);
  //       this.getDoctors();
  //     }
  //   );
  // }

  getDoctors() {
    this.doctorService.getAllDoctors().subscribe(
      (data) => {
        console.log('doctors list', data.allDoctors);
        
        this.doctors = data.allDoctors;
      }
    );
  }
  // goToEdit(id) {
  //   this.router.navigate([`editDoctors/${id}`]);
  // }
}
