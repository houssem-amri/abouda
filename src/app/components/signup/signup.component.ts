import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavigationEnd, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { filter } from 'rxjs/operators';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  role: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.router.events
    .pipe(filter((e) => e instanceof NavigationEnd))
    .subscribe((event) => this.postRoleToDb(event));
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullName: ["", [Validators.minLength(3), Validators.required]],
      emailAdress: ["", [Validators.minLength(10), Validators.required]],
      tel: [
        "",
        [Validators.minLength(8), Validators.maxLength(8), Validators.required],
      ],  
      password:[""],
      role: [ this.role ]
    });
  }
  postRoleToDb(location) {
		if (location.url === '/admin/signup') {
			this.role = 'admin';
		} else {
			this.role = 'user';
		}
	}
  signup(f: any) {
    this.userService.signup(f).subscribe((data) => {
      console.log(data.message);
    });
  }
}
