import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
// import { ProductEditComponent } from './component/product-edit/product-edit.component';/

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    // ProductEditComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
