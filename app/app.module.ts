import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index/index';
import { CatgriesPage } from '../pages/catgries/catgries';
import { LoginSignupPage } from '../pages/login-signup/login-signup';
import { VerfifyemailPage } from '../pages/verfifyemail/verfifyemail';
import { LaptopproductPage } from '../pages/laptopproduct/laptopproduct';
import { ProductDescriptionPage } from '../pages/product-description/product-description';
import { AddtocartPage} from '../pages/addtocart/addtocart';

import { Storage, IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductProvider } from '../providers/product/product';
import {NgxPaginationModule} from 'ngx-pagination';
import { ConfigProvider } from '../providers/config/config';
import { AuthProvider } from '../providers/auth/auth';
import { Ionic2RatingModule } from 'ionic2-rating';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IndexPage,
    CatgriesPage,
    LoginSignupPage,
    VerfifyemailPage,
    LaptopproductPage,
    ProductDescriptionPage,
    AddtocartPage
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    Ionic2RatingModule ,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IndexPage,
    CatgriesPage,
    LoginSignupPage,
    VerfifyemailPage,
    LaptopproductPage,
    ProductDescriptionPage,
    AddtocartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider,
    ConfigProvider,
    AuthProvider
    
  ]
})
export class AppModule {}
