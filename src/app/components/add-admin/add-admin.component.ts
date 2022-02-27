import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  admin:any={};
  addAdminForm:FormGroup;
  constructor(private formBulider : FormBuilder) { }

  ngOnInit() {
    this.addAdminForm = this.formBulider.group({
      firstName : ['',[Validators.minLength(3),Validators.required]],
      email : ['',[Validators.minLength(10),Validators.required]],
      tel : [''],
      password : ['',[Validators.minLength(8),Validators.required] ],
      confirmpassword : ['',[Validators.required]],
      
    })
  }

addAdmin(){
  console.log("my admin",this.admin);
  
}

}
