import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndexPage } from '../../pages/index/index';
import { laptop_description } from '../../models/interface';

import {Observable} from 'rxjs/Observable';
@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {
   
  }
blockbosterDeal(){
 
 return this.http.get('assets/product.json')
}
catagries_accordian(){
 
  return this.http.get('assets/information.json');
}
product_laptop():Observable<any> {
  
 return this.http.get('assets/productss.json')
  
 
}

}
