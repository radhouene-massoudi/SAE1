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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
