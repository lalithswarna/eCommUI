import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: any[] = [];
  modalProduct: any = {};
  showModal = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      (data) => this.products = data,
      (error) => console.error('Error fetching products:', error)
    );
  }

  handleAddProduct() {
    this.productService.addProduct(this.modalProduct).subscribe(
      () => {
        this.showModal = false;
        this.fetchProducts();
      },
      (error) => console.error('Error adding product:', error)
    );
  }

  handleUpdateProduct() {
    this.productService.updateProduct(this.modalProduct).subscribe(
      () => {
        this.showModal = false;
        this.fetchProducts();
      },
      (error) => console.error('Error updating product:', error)
    );
  }

  handleDeleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => this.fetchProducts(),
      (error) => console.error('Error deleting product:', error)
    );
  }

  showModalForProduct(product: any) {
    this.modalProduct = { ...product };
    this.showModal = true;
  }

  showModalForAddProduct() {
    this.modalProduct = {};
    this.showModal = true;
  }
}
