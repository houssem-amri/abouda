import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
role:string
  constructor(private router : Router) { 
    this.role=localStorage.getItem("roleConnectedUser"||"") 
   }

  ngOnInit() {
    console.log("role",this.role);
    
  }
  logout(){
localStorage.removeItem("roleConnectedUser")    
this.router.navigate(['/']);
  }
}
