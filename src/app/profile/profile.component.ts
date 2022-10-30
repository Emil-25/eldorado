import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../product-data.service';
import User from '../User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  signForm: FormGroup;
  userData:User = this.prodService.userData; 

  constructor(private fb: FormBuilder,
    private prodService: ProductDataService,
    ) { }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      firstName: ["",[
        Validators.minLength(2),
        Validators.required
      ]],
      lastName: ["",[
        Validators.minLength(2),
        Validators.required
      ]],
      email: ["",[
        Validators.email,
        Validators.required
      ]],
      password: ["",[
        Validators.minLength(4),
        Validators.required
      ]]
    })

  }

  //For error validation
  get firstName() {
    return this.signForm.get("firstName")
  }
  get lastName() {
    return this.signForm.get("lastName")
  }
  get email() {
    return this.signForm.get("email")
  }
  get password() {
    return this.signForm.get("password")
  }

  //Content depending on user's registration
  get signed() {
    return this.prodService.signed;
  }
  set signed(value:boolean) {
    this.prodService.signed = value;
  }



  //Storing user data
  user(fname:string,lname:string) {
    this.prodService.user(fname,lname);
    this.userData = this.prodService.userData;
    this.signed = true;
  }

}
