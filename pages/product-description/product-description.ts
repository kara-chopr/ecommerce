import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigProvider } from '../../providers/config/config';
import { CatgriesPage } from '../catgries/catgries';


import { AddtocartPage} from '../addtocart/addtocart';

import { Slides } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-product-description',
  templateUrl: 'product-description.html',
})
export class ProductDescriptionPage {
  days;hours;minutes;seconds;date1;date2;
 
  length:number=0;
  cartItem:any=[];
  @ViewChild('slide') Banner: Slides;
  productDescriptions;
  slideData:Array<any>;
  rate;
  buyername;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private config:ConfigProvider) {
       this.productDescriptions = this.navParams.get('myData');
 }
 ionViewDidLoad() {
 this.slideData=[
    {imageSrc:this.productDescriptions.ProductPicUrl},
    {imageSrc:this.productDescriptions.ProductPicUrl1},
   ];
   this.config.getStorage('signupform').then(res=>{
   
        this.buyername=JSON.parse(res);
 
  })
   setInterval(()=>{
 this.count()
},1000)
  }
  redirectTocategoriesPage(){
    this.navCtrl.setRoot(CatgriesPage, {}, {animate: true, direction: 'forward'});

  }
  onModelChange(event){
   
    console.log(event);

  }
 
count(){
  
  var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
 
var day = currentDate.getDate();
var month = currentDate.getMonth() ;
var year = currentDate.getFullYear();
var countDownDate = new Date(year, month, day,11).getTime();

// Update the count down every 1 second

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;
   
    // Time calculations for days, hours, minutes and seconds
     this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

    // If the count down is over, write some text 
    

}
addtocart(product){
  this.cartItem.push(product);
this.length=this.cartItem.length;
let cartItems =JSON.stringify(this.cartItem);
this.config.set_storage('cartItems', cartItems)

}
redirectTocartPage(){
  this.navCtrl.setRoot(AddtocartPage, {}, {animate: true, direction: 'forward'});
}
}
