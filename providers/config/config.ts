import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ConfigProvider {
  translations: any;
  constructor(public http: HttpClient , private storage :Storage) {
    this.translations={

      'block_buster':' BlockBoster Deal',
      'home_title' :'WebIndia',
      'categories':'categories',
      'Blockbuster Deals':'See All Blockbuster Deals',
      'Exchange_Offer' : 'Exchange Offer',
      'allexchangeoffer':'See All Exchange Deals',
      'Moto Offer' : 'Moto Offer',
      'off On Electrnics':'50% to 80% off On Electrnics',
      'Signin_heading' : 'Sign in for the best experience',
      'Sign up_button':'Sign up',
      'Todays Deal':'Todays Deal',
      'log_in' : 'log in',
      'already_member' :'Already a member',
      'sign_up':'Create an account',
      'sigin_button' :'Continue',
      'signin' :' Sign In',
      'security':'Login & Security',
      'name' : 'Name',
      'edit':'Edit',
      'email':'Email',
      'phone':'Phone',
      'password':'Password',
      'done' :'Done',
      'viewmore':'View More >>',
      'stock':'In Stock',
     'addtocart_button':'Add to Cart',
     'buy_now':'Buy Now'
    }
  }
getTranslation(key){

  return this.translations[key];
}
set_storage(key,value){

  this.storage.set(key,value)

}
getStorage(key){
  return this.storage.get(key);
}
}
