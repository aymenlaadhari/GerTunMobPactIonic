import { NavController, Loading, Alert } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ControlGroup } from '@angular/common';
import { AuthData } from '../../providers/auth-data/auth-data';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ResetPasswordPage } from '../reset-password/reset-password';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [AuthData]
})
export class LoginPage {
    public loginForm: any;

  constructor(public nav: NavController, public authData: AuthData, public formBuilder: FormBuilder) {
    
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  loginUser(){
 
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then( authData => {
        this.nav.setRoot(HomePage);
      }, error => {
        let alert = Alert.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        this.nav.present(alert);
      });
      let loading = Loading.create({
        dismissOnPageChange: true,
      });
      this.nav.present(loading);
    }
  }
  
  goToSignup(){
  this.nav.push(SignupPage);
}
 
goToResetPassword(){
  this.nav.push(ResetPasswordPage);
}

}
