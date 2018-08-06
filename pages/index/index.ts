import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewChild} from '@angular/core';
import { Slides } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { CatgriesPage } from '../catgries/catgries';
import { AlertController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { Storage } from '@ionic/storage';
import { LoginSignupPage } from '../login-signup/login-signup';
import { VerfifyemailPage } from '../verfifyemail/verfifyemail';
@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})

export class IndexPage {
  username;
  
  fadedData:any // store Request Blockbuster Deal
 fadedatabefore;
  productService: any;
  @ViewChild('blockbuster') blockbusterSlidder: Slides;
  @ViewChild('exchangeOffer') exchangeOffers: Slides;
  
  @ViewChild('slide') Banner: Slides;
  slideData:Array<any>;
  motophonedatas:Array<any>;
  primeday:string='assets/imgs/st.jpg'
  constructor(public navCtrl: NavController, public navParams: NavParams, public productSer:ProductProvider,
    private alertCtrl: AlertController, private config:ConfigProvider, private storage:Storage) {
   this.slideData=[
      {imageSrc:'assets/imgs/s1.jpg'},
      {imageSrc:'assets/imgs/s2.jpg'},
      {imageSrc:'assets/imgs/s3.jpg'},
    ]
  this.motophonedatas=[
     {imageSrc:'assets/imgs/p1.png', name:'Moto Es 5',price:1100},
     {imageSrc:'assets/imgs/p2.png', name:'Moto vs 5',price:1200},
     {imageSrc:'assets/imgs/p3.png', name:'Moto smart 5', price:3400},
     {imageSrc:'assets/imgs/p4.png', name:'Moto tyu 5', price:1300}
  ];
 
  }
  feature_catgriess=[ {imageSrc:'assets/imgs/d1.jpg', name:'Towels Real',price:1100},
  {imageSrc:'assets/imgs/d2.jpg', name:'Towels Real',price:1100},
  {imageSrc:'assets/imgs/d3.jpg', name:'Towels Real',price:1100},
]
  ionViewDidLoad() {
   
   
    this.productSer.blockbosterDeal().subscribe(res=>{
      if(res){
       
        this.fadedatabefore=res
      this.fadedData=this.fadedatabefore.arrayOfProducts;
      }
    });
   this.config.getStorage('username').then(res=>{
  
      setTimeout(()=>{   
        this.newsLetter();
   }, 3000);
    
    })
  
  }
 
  newsLetter() {
    let alert = this.alertCtrl.create({
      cssClass: 'my-custom-alert',
      title: 'Subscribe to our news letter',
      subTitle: 'To be updated latest updates',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
       
        {
          name: 'email',
          placeholder: 'Email'
        }
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Subscribe',
          handler: data => {
            this.config.set_storage('username', data.username);
          }
        }
      ]
    });
    alert.present();
  }

  
  blockBusterSlider(i) {
  
this.blockbusterSlidder.slideTo(i,200);
    }
    exchangeOfferSlidder(i) {
  
      this.exchangeOffers.slideTo(i,200);
          }

    redirectToBlockbosterPage(){
    //  this.navCtrl.push()
    }
    daily_esstails(){

    }
    redirectTocategoriesPage(){
      this.navCtrl.setRoot(CatgriesPage, {}, {animate: true, direction: 'forward'});

    }
    redirectTologinPage(){
      this.navCtrl.setRoot(LoginSignupPage, {}, {animate: true, direction: 'forward'});

    }
    redirectToeditemail(){
      this.navCtrl.setRoot(VerfifyemailPage, {}, {animate: true, direction: 'forward'});
    
    }
  }

 
   
 
 
 
  

