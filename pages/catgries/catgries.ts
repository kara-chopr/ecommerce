import { Component , Directive,ElementRef,Renderer} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { ConfigProvider } from '../../providers/config/config';
@IonicPage()

@Component({
  selector: 'page-catgries',
  templateUrl: 'catgries.html',
})

export class CatgriesPage {
  username;
  information2;

information:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public productService:ProductProvider,
  private config:ConfigProvider) {
    
  
  }
 
 
  ionViewDidLoad() {
   
    this.config.getStorage('username').then(res=>{
  
      if(res !== null ){
        this.username=res
 
      } 
    })
  this.productService.catagries_accordian().subscribe(res=>{
   
   if(res){
  console.log(res)
   this.information2=res;
   this.information= this.information2.items;
  
   } else{
  
     console.log(res);
   }
   });
   this.config.getStorage('username').then(res=>{
  
    if(res !== null ){
      this.username=res

    } 
  })
   }
      
   
   toggleSection(i){
   
    this.information[i].open=!this.information[i].open;
    }
    toggleItem(i,j){
     
    this.information[i].children[j].open=!this.information[i].children[j].open;
    }
   
}
