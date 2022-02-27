import { Component, OnInit } from "@angular/core";
import { DoctorService } from "src/app/services/doctor.service";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.css"],
})
export class DoctorsComponent implements OnInit {
  doctors: any = [];
  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.doctorService.getAllDoctors().subscribe((data) => {
      console.log("Here response from BE ", data.allDoctors);
      this.doctors = data.allDoctors;
    });
  }
}
