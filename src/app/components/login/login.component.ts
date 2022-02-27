import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};
  loginForm : FormGroup;
  connectedUser : any;
  constructor(private formBulider : FormBuilder,
              private router : Router, private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBulider.group({
      email : [''],
      password : [' ']
    })

  }
login(){
  
this.userService.login(this.user).subscribe((res)=>{
if (res.user.role==="user") {
  localStorage.setItem("roleConnectedUser",res.user.role)
  let user=JSON.stringify(res.user)
  localStorage.setItem("ConnectedUser",user)
  this.router.navigate(['doctors']);

}else{
  localStorage.setItem("roleConnectedUser",res.user.role)
  let user=JSON.stringify(res.user)

  localStorage.setItem("ConnectedUser",user)

  this.router.navigate(['dashboardAdmin']);

}
})
}

//  login(){
//    console.log('user',this.user);
//    let users = JSON.parse(localStorage.getItem("users") || "[]");

//    for (let i = 0; i < users.length; i++) {
//     if (users[i].email ==this.user.email && users[i].password == this.user.password) {
//       this.connectedUser = users[i];
//     }
//    }
//    if (this.connectedUser) {
//      localStorage.setItem("connectedUser",JSON.stringify(this.connectedUser));

//      switch (this.connectedUser.role) {
//        case "admin":
//          this.router.navigate(['dashboardAdmin'])
//          break;
//          case "client":
//           this.router.navigate([''])
//           break;
//           case "doctor":
//             this.router.navigate(['dashboardDoctor'])
//          break;
//        default:
//          break;
//      }
//    }
//  }
}
