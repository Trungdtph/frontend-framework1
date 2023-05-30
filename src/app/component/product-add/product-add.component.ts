import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { IProduct } from 'src/app/interface/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0]
  })
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService) {

  }

  onHandleSubmit() {
    const product: IProduct = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
    }
    this.productService.addItem(product).subscribe((item) => {
      console.log('product', product);
    })
  }


}


