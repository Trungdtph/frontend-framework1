import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
// import { ProductEditComponent } from './component/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: ProductAddComponent },
  // { path: '/edit/:id', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

