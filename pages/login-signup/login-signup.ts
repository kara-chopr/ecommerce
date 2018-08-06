import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,App,LoadingController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { FormBuilder, FormGroup,FormControl, Validators, AbstractControl } from '@angular/forms';
import { IndexPage } from '../index/index';
@IonicPage()
@Component({
  selector: 'page-login-signup',
  templateUrl: 'login-signup.html',
})
export class LoginSignupPage {
  signupFlag:Boolean;
  loginFlag:Boolean;
  formgroup:FormGroup
  signin:FormGroup;
  signupForm:FormGroup;
  signupField:{
    'name':null,
    'emails':null,
    'passwords':null,
    'phone':null
  }
  logininFields:{
    'email':null,
    'password':null
  }
  email:AbstractControl;
  password:AbstractControl;
  name:AbstractControl;
  emails:AbstractControl;
  passwords:AbstractControl;
  phone:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private config:ConfigProvider,
    private formBuilder:FormBuilder, public appCtrl: App , private loadingCtrl:LoadingController,) {
    this.signupFlag=true;
    this.loginFlag=false;
    this.signin = formBuilder.group({
      email: ['', Validators.compose(
       [Validators.required,Validators.maxLength(40),
          Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) ])],
      password: ['', Validators.required]
    });
    this.email=this.signin.controls['email'];
    this.password=this.signin.controls['password'];
    this.signupForm=formBuilder.group({
      name:['', Validators.compose([
        Validators.required,Validators.minLength(3),Validators.maxLength(20)],
        
          )],
          emails: ['', Validators.compose(
            [Validators.required,Validators.maxLength(40),
               Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) ])],
           passwords: ['', Validators.required],
           phone: ['', Validators.required]
    });
    this.emails=this.signin.controls['emails'];
    this.passwords=this.signin.controls['passwords'];
    this.name=this.signin.controls['name'];
    this.phone=this.signin.controls['phone'];
  }

  ionViewDidLoad() {
    
  }
  showsignupForm(){
  this.signupFlag=true;
  this.loginFlag=false;
}
showloginform(){
  this.loginFlag=true;
  this.signupFlag=false;
}

signinForm(){
 
  if(this.signin.valid){
  
   let emails=this.signin.value.email;
   let passwords =this.signin.value.password;
    let loading = this.loadingCtrl.create({
     // content: '<img src="assets/imgs/bubbles.svg">',
      //duration: 15000,//this.config.get_translation('loadingresults'),
      //spinner:'hide',
      //showBackdrop:true,
      content: 'Please wait...',
      duration: 1000,
      dismissOnPageChange: true

    });
   
    loading.present();
   
    if(emails =="karan@yahoo.com" && passwords == 'fine'){
      setTimeout(() => {
        this.appCtrl.getRootNavs()[0].setRoot(IndexPage);
        });
    }
    
    /*
   this.auth.signinUser(this.formgroup.value).subscribe(res=>{
    let toast = this.toastCtrl.create({
     
      message: res.message,
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
    console.log(res.message);
      },
      err=>{
      
        let toast = this.toastCtrl.create({
          message: err.message,
          duration: 1000,
          position: 'bottom'
        });
        toast.present();
        console.log(err.message)
      }
      
    );
   
*/
  }

  this.reset();
}
reset() {
  this.signin.reset();
}

sigup(){
 
  if(this.signupForm.valid){
  debugger;
   let value=JSON.stringify(this.signupForm.value);
   this.config.set_storage('signupform', value);
    let loading = this.loadingCtrl.create({
     // content: '<img src="assets/imgs/bubbles.svg">',
      //duration: 15000,//this.config.get_translation('loadingresults'),
      //spinner:'hide',
      //showBackdrop:true,
      content: 'Please wait...',
      duration: 1000,
      dismissOnPageChange: true

    });
   
    loading.present();

  }
  this.signupreset();
  
}
signupreset(){
  this.signupForm.reset();
}

}
