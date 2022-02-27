import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  editDoctorForm:FormGroup;
  doctor:any = {};
  doctorId:any;
  constructor(
  private formBuilder : FormBuilder,
  private activatedRoute : ActivatedRoute,
  private doctorService : DoctorService,
  private router : Router){}

  ngOnInit() { 
    this.doctorId =  this.activatedRoute.snapshot.paramMap.get('id');
    this.doctorService.getDoctorById(this.doctorId).subscribe(
      (data)=>{
        this.doctor = data;
      }
    );
    this.editDoctorForm = this.formBuilder.group({
      name:[''],
      departement:[''],
      localization:[''],
    })
  }

  editDoctor(){
this.doctorService.editDoctor(this.doctor).subscribe(
  (data)=>{
    console.log('Here data after edit', data.message);
    this.router.navigate(['dashboardAdmin']);
  }
);
  }
}