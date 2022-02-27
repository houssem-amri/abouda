import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctor : any={};
  addDoctorForm : FormGroup;
  imagePreview : string 
    constructor(private formBuilder : FormBuilder,
      private doctorService:DoctorService,
      private router : Router) { }
  

      ngOnInit() {
      
        this.addDoctorForm = this.formBuilder.group({
          name : [''],
          departement : [''],
          localization : [''],
          image : ['']
        })
      }

      onImageSelected(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];
        console.log("file",file);
        this.addDoctorForm.patchValue({ image: file });
        this.addDoctorForm.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
        this.imagePreview = reader.result as string
        };
        reader.readAsDataURL(file);
        }
    
  addDoctor(){
  console.log("my doctor",this.doctor);
  this.doctorService.addDoctor(this.doctor,this.addDoctorForm.value.image).subscribe(
    (data)=>{
  console.log('Here data from BE',data.message);
  this.router.navigate(['dashboardAdmin']);
    }
  );
  }

  }