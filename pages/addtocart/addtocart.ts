import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { CatgriesPage } from '../catgries/catgries';

@IonicPage()
@Component({
  selector: 'page-addtocart',
  templateUrl: 'addtocart.html',
})
export class AddtocartPage {
  cartItems:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private config:ConfigProvider) {
  }
  ionViewDidEnter(){
    this.config.getStorage('cartItems').then(res=>{
   
      this.cartItems=JSON.parse(res);
      

})
  }
  redirectTocategoriesPage(){
    this.navCtrl.setRoot(CatgriesPage, {}, {animate: true, direction: 'forward'});

  }

}
