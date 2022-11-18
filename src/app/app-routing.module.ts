import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproduitComponent } from './core/produit/addproduit/addproduit.component';
import { DetailproductComponent } from './core/produit/detailproduct/detailproduct.component';
import { ShowProductsComponent } from './core/produit/show-products/show-products.component';
import { LoginComponent } from './core/user/login/login.component';
import { ListPrpductComponent } from './product/list-prpduct/list-prpduct.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {
path:'',redirectTo:'login',pathMatch:'full'
  },
 {
path:'login',component:LoginComponent
 } ,
 {
  path:'detail/:idt',component:DetailproductComponent
   } ,
 
  {
    path:'addproduit',component:AddproduitComponent
  },
  {
    path:'liste',component:ShowProductsComponent
  },
  {
    path:'mylist',component:ListPrpductComponent
  },
  {
    path:'**',component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
