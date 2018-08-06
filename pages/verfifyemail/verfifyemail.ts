import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { CatgriesPage } from '../catgries/catgries';
@IonicPage()
@Component({
  selector: 'page-verfifyemail',
  templateUrl: 'verfifyemail.html',
})
export class VerfifyemailPage {
  signupValue:any
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private config:ConfigProvider) {
  }

  ionViewDidLoad() {
    this.config.getStorage('signupform').then(res=>{
  
      if(res !== null ){
       
        this.signupValue=JSON.parse(res);
       
      } 
    })
  }
  redirectTocategoriesPage(){
    this.navCtrl.setRoot(CatgriesPage, {}, {animate: true, direction: 'forward'});

  }

}
