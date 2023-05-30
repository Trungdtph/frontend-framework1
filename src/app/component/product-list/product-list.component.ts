import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from 'src/app/interface/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  removeItem(id: any) {
    const logger = confirm('Are you sure you want to delete')
    if (logger) {
      this.productService.removeItem(id).subscribe(() => {
        this.products = this.products.filter(item => item.id !== id)
      })
    }
  }

  onHandleClick(id: number) {
    window.location.href = `/edit/${id}`
  }
}
