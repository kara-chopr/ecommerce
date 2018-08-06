import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigProvider } from '../../providers/config/config';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class AuthProvider {
  private observable:Observable<any>;

  constructor(public http: HttpClient,  private config:ConfigProvider) {
    
  }
  public signinUser(form:any): Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      
      })
    };

    
    if(this.observable){
      console.log('User Sign in pending');
      return this.observable;
    }else{
    // return this.http.post();
      
    }
    
  }
}
