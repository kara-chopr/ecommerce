import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { ProductProvider } from '../../providers/product/product';
import { ProductDescriptionPage } from '../product-description/product-description';
import { CatgriesPage } from '../catgries/catgries';

@IonicPage()
@Component({
  selector: 'page-laptopproduct',
  templateUrl: 'laptopproduct.html',
})
export class LaptopproductPage {
  pricerange:number=300;
  p: number = 1;
  pricefilterview;
  pricerangeflag:boolean=true;
laptopView:any;
myInput='test';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private config:ConfigProvider,public productSer:ProductProvider,  private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
   
    this.productSer.product_laptop().subscribe(res=>{
      if(res){
     
         let laptop=res;
         this.laptopView=laptop;
     
      }
    });
    
  }
RedirecttoProductdescription(product){

this.navCtrl.setRoot(ProductDescriptionPage,{myData:product})
}
redirectTocategoriesPage(){
  this.navCtrl.setRoot(CatgriesPage, {}, {animate: true, direction: 'forward'});

}
pricrange(pricerange){
 
  this.pricerange=pricerange;
  let loading = this.loadingCtrl.create({
    content: 'loading',
   // duration: 1500,//this.config.get_translation('loadingresults'),
    spinner:'true',
    showBackdrop:true,

  });

  loading.present();
  this.productSer.product_laptop().subscribe(res=>{
    if(res){
   this.pricerangeflag=false;
       let laptop=res;
        this.pricefilterview=laptop.ProductCollection.filter(data => data.Price >pricerange )
      
        loading.dismiss();
    }
  }
  );

}
}
