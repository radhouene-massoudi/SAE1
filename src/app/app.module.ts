import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ListPrpductComponent } from './product/list-prpduct/list-prpduct.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './shared/logo/logo.component';
import { ShowProductsComponent } from './core/produit/show-products/show-products.component';
import { AddproduitComponent } from './core/produit/addproduit/addproduit.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/user/login/login.component';
import { DetailproductComponent } from './core/produit/detailproduct/detailproduct.component';
import { FormproductComponent } from './core/formproduct/formproduct.component';
import { C1Component } from './core/c1/c1.component';
import { C2Component } from './core/c2/c2.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './core/products/products.component';
import { RemoveproductComponent } from './core/removeproduct/removeproduct.component';
import { UpdateproductComponent } from './core/updateproduct/updateproduct.component';
import { TvComponent } from './core/tv/tv.component';
import { MobileComponent } from './core/mobile/mobile.component';
import { ShowoneproductComponent } from './core/showoneproduct/showoneproduct.component';
import { ErrorsssComponent } from './shared/errorsss/errorsss.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ListPrpductComponent,
    AddproductComponent,
    NavComponent,
    FooterComponent,
    LogoComponent,
    ShowProductsComponent,
    AddproduitComponent,
    NotfoundComponent,
    LoginComponent,
    DetailproductComponent,
    FormproductComponent,
    C1Component,
    C2Component,
    ProductsComponent,
    RemoveproductComponent,
    UpdateproductComponent,
    TvComponent,
    MobileComponent,
    ShowoneproductComponent,
    ErrorsssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
